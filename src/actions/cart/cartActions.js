import { cartActionTypes } from "utils/actionTypes";

const { ADD_TO_CART, REMOVE_CART_ITEM, DECREASE_QUANTITY } = cartActionTypes;

export const addToCart = payload => {
  return {
    type: ADD_TO_CART,
    payload
  };
};

export const removeCartItem = payload => {
  return {
    type: REMOVE_CART_ITEM,
    payload
  };
};

export const decreaseQuantity = payload => {
  return {
    type: DECREASE_QUANTITY,
    payload
  };
};


