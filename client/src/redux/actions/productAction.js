import axios from "axios"
import { GET_PRODUCT_FAILURE, GET_PRODUCT_SUCCESS, GET_PRODUCT_DETAIL_SUCCESS, GET_PRODUCT_DETAIL_FAILURE, GET_PRODUCT_DETAIL_REQUEST, GET_PRODUCT_DETAIL_RESET } from './../constants/productConstants';

const URL = "https://flipkart-clone-backend-2ise.onrender.com";

export const getProducts = () => async (dispatch) => {
    try {
        const { data } = await axios.get(`${URL}/products`);
        dispatch({ type: GET_PRODUCT_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: GET_PRODUCT_FAILURE, payload: error.message });
    }
};


export const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: GET_PRODUCT_DETAIL_REQUEST }); // loading

        const { data } = await axios.get(`${URL}/product/${id}`);
        
        dispatch({ type: GET_PRODUCT_DETAIL_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: GET_PRODUCT_DETAIL_FAILURE, payload: error.message });
    }

}
