import { createStore } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
// @ts-ignore
// import { CookieStorage } from '../utils/library/redux-persist-cookie-storage';
import { CookieStorage } from 'redux-persist-cookie-storage';
import Cookies from 'cookies-js';

import reducers from './rootReducer';

const persistConfig = {
    key: 'root',
    storage: new CookieStorage(Cookies, {}),
};

// @ts-ignore
const rootReducer = persistCombineReducers(persistConfig, reducers);
// const rootReducer = persistReducer(persistConfig, reducers)

export const reduxStore = createStore(rootReducer, undefined);
export const reduxPersistor = persistStore(reduxStore, {});
