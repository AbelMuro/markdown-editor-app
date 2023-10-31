import {configureStore} from '@reduxjs/toolkit';
import Reducer from './Reducers';
import {                
    persistStore,                                                                 
    persistReducer,                                                                 
    FLUSH,                                                                         
    REHYDRATE,                                                                     
    PAUSE,                                                                          
    PERSIST,                                                                       
    PURGE,                                                                       
    REGISTER} from 'redux-persist';
import storage from 'redux-persist/lib/storage';                                    //using the local storage to store the state
import { getPersistConfig } from 'redux-deep-persist';

const config = getPersistConfig({
    key: 'root',
    storage,
    whitelist: ['theme'], 
    rootReducer: Reducer
});

const persistedReducer = persistReducer({key: 'root', storage}, Reducer);

export const store = configureStore({                     
    reducer: persistedReducer,
    middleware : getDefaultMiddleware => getDefaultMiddleware({serializableCheck: {ignoredActions: [PERSIST, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]}})
})

export const persistedStore = persistStore(store);