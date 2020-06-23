import { productActionTypes } from "utils/actionTypes";

const { SET_PRODUCTS } = productActionTypes;

const initialState = {
  products: []
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: payload
      };

    default:
      return state;
  }
};
