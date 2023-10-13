import menuReducer from './menuReducer.js';
import themeReducer from './themeReducer.js';
import { combineReducers } from 'redux';

export default combineReducers({
    menu: menuReducer,
    theme: themeReducer
})