import menuReducer from './menuReducer.js';
import { combineReducers } from 'redux';

export default combineReducers({
    menu: menuReducer
})