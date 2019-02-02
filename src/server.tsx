import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { getStoredState, persistCombineReducers } from 'redux-persist';
// @ts-ignore
import { CookieStorage, NodeCookiesWrapper } from 'redux-persist-cookie-storage';
import { StaticRouter } from 'react-router-dom';
import reducers from './redux/rootReducer';

// @ts-ignore
import Cookies from 'cookies';

import App from './App';

let assets: any;

const syncLoadAssets = () => {
    assets = require(process.env.RAZZLE_ASSETS_MANIFEST!);
};
syncLoadAssets();

const server = express();

server.use(async (req: any, res, next) => {
    // @ts-ignore
    const cookieJar = new NodeCookiesWrapper(new Cookies(req, res));

    const persistConfig = {
        key: 'root',
        storage: new CookieStorage(cookieJar),
        stateReconciler(inboundState: any, originalState: any) {
            return originalState;
        }
    };

    let preloadedState;
    try {
        preloadedState = await getStoredState(persistConfig);
    } catch (e) {
        preloadedState = {};
    }

    const rootReducer = persistCombineReducers(persistConfig, reducers);

    req.reduxStore = createStore(rootReducer, preloadedState);
    res.removeHeader('Set-Cookie');
    next();
});

server
    .disable('x-powered-by')
    .use(express.static(process.env.RAZZLE_PUBLIC_DIR!))
    .get('/*', (req: any, res) => {
        const context = {};
        const markup = renderToString(
            <StaticRouter context={context} location={req.url}>
                <Provider store={req.reduxStore}>
                    <App />
                </Provider>
            </StaticRouter>
        );

        res.send(
            `<!doctype html>
    <html lang="">
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta charSet='utf-8' />
        <title>Razzle TypeScript</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        ${
                assets.client.css
                    ? `<link rel="stylesheet" href="${assets.client.css}">`
                    : ''
                }
          ${
                process.env.NODE_ENV === 'production'
                    ? `<script src="${assets.client.js}" defer></script>`
                    : `<script src="${assets.client.js}" defer crossorigin></script>`
                }
    </head>
    <body>
        <div id="root">${markup}</div>
    </body>
</html>`
        );
    });

export default server;
