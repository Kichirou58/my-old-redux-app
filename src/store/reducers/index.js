/**
 * Module có nhiệm vụ là combine tất cả các reducers trong app thành một single index reducer, 1 nơi lắng nghe các actions
 */

import {combineReducers} from 'redux';
import todoReducer from './todoReducer';

// rootReducer chứa toàn bộ các reducer
const rootReducer = combineReducers({
    myTodos: todoReducer
})

export default rootReducer;