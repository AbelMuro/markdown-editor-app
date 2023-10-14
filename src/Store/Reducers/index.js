import menuReducer from './menuReducer.js';
import themeReducer from './themeReducer.js';
import fileReducer from './fileReducer.js';
import { combineReducers } from 'redux';

export default combineReducers({
    menu: menuReducer,
    theme: themeReducer,
    file: fileReducer,
})