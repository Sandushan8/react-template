import { configureStore } from "@reduxjs/toolkit";
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import AuthReducer from './authReducer/authReducer';

export const store = configureStore({
    reducer: {
        auth: persistReducer({
            key: 'auth',
            storage,
            whitelist: ['isAuthenticated', 'token'],
        }, AuthReducer),
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    })
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;