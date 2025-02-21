import * as actionTypes from '../constants/productConstants';


export const getProductsReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case actionTypes.GET_PRODUCT_SUCCESS:
            return {loading: false, products: action.payload };
        case actionTypes.GET_PRODUCT_FAILURE:
            return {loading: false, error: action.payload };
        default:
            return state;
    }
};

export const getProductDetailReducer = (state = { product: {} }, action) => {
    switch (action.type) {
        case actionTypes.GET_PRODUCT_DETAIL_REQUEST:
            return { loading: true, product: {} };
        case actionTypes.GET_PRODUCT_DETAIL_SUCCESS:
            return { loading: false, product: action.payload };
        case actionTypes.GET_PRODUCT_DETAIL_FAILURE:
            return { loading: false, error: action.payload };
        case actionTypes.GET_PRODUCT_DETAIL_RESET:
            return { product: {} };
        default:
            return state;
    }
}