/**
 * Định nghĩa 1 Store để management state
 * 1 Store gồm reducers, state, các middleware
 */

import { createStore, applyMiddleware } from "redux";
/**
 * Redux Thunk là một Middleware cho phép viết các action trả về một function thay vì một plain javascript object
 * Bằng cách trì hoãn việc đưa action đến reducer. Redux Thunk được sử dụng để xử lý các logic bất đồng bộ phức tạp cần truy cập đến Store
 */
import thunk from "redux-thunk";

/**
 * import rootReducer
 */
import rootReducer from "./reducers";

/**
 * Module composeWithDevTools của redux-devtools-extension dùng để apply Middleware vào Store
 */
import { composeWithDevTools } from "redux-devtools-extension";

// Khai báo State mặc định ban đầu của store
const initialState = {};

// Khởi tạo 1 Middleware thunk
const middleware = [thunk];

// Tạo store từ rootReducer, state ban đầu là initialState và apply middleware thunk vào store
const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
