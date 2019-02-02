import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { reduxStore, reduxPersistor } from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App';

hydrate(
    <Provider store={reduxStore}>
        <PersistGate loading={null} persistor={reduxPersistor}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </PersistGate>
    </Provider>
    ,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept();
}
