import { productActionTypes } from "utils/actionTypes";

const { SET_PRODUCTS } = productActionTypes;

export const setProducts = payload => ({
  type: SET_PRODUCTS,
  payload
});