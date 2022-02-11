import { ADD_CART } from "../types";

export const addToCart = (bookToCart) => (dispatch) => {
  dispatch({
    type: ADD_CART,
    payload: bookToCart
  });
};
