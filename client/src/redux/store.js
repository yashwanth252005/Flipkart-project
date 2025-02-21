import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
import { getProductsReducer } from "./redusers/productReducer";
import { getProductDetailReducer } from "./redusers/productReducer";
import { cartReducer } from "./redusers/CartReducer";

// Combine all reducers
const reducer = combineReducers({
    getProducts: getProductsReducer,
    getProductDetails: getProductDetailReducer,
    cart: cartReducer,
});

// Middleware setup
const middleware = [thunk];

// Use built-in Redux DevTools function (fallback to normal compose if not available)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create Redux store
const store = createStore(reducer, composeEnhancers(applyMiddleware(...middleware)));

export default store;
