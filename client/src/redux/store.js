import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux-thunk";
import { getProductsReducer } from "./redusers/productReducer";
import { getProductDetailReducer } from "./redusers/productReducer";
import { cartReducer } from "./redusers/CartReducer";

const reducer = combineReducers({
    getProducts: getProductsReducer,
    getProductDetails: getProductDetailReducer,
    cart: cartReducer,
});

const middleware = [thunk];

const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)));


export default store;