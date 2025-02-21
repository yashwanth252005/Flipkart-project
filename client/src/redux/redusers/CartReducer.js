import * as actionTypes from "../constants/CartConstants";


export const cartReducer = (state = { cartItems: [] }, action) => { 
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            const item = action.payload;
            const existItem = state.cartItems.find((product) => product.id === item.id);
            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((product) =>
                        product.id === existItem.id ? item : product
                    ),
                };
            } else {
                return { ...state, cartItems: [...state.cartItems, item] };
                }
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter((product) => product.id !== action.payload),
            };
        case actionTypes.RESET_CART:
            return {
                ...state,
                cartItems: [],
            };
        default:
            return state;
    }
}
 