import { cartActionTypes } from "utils/actionTypes";

const { ADD_TO_CART, REMOVE_CART_ITEM, DECREASE_QUANTITY } = cartActionTypes;

const initialState = {
  cartItems: []
};

export default (state = initialState, action) => {
  const { type, payload } = action,
    cloneCartItems = [...state.cartItems],
    indexOfPayloadItem = cloneCartItems.findIndex(
      cartItem => cartItem.id === payload.id
    );

  switch (type) {
    case ADD_TO_CART:
      if (indexOfPayloadItem > -1) {
        cloneCartItems[indexOfPayloadItem].quantity += 1;
      } else {
        payload.quantity = 1;
        cloneCartItems.push(payload);
      }
      break;

    case REMOVE_CART_ITEM:
      cloneCartItems.splice(indexOfPayloadItem, 1);
      break;

    case DECREASE_QUANTITY:
      cloneCartItems[indexOfPayloadItem].quantity -= 1;
      break;

    default:
      return state;
  }
  return {
    ...state,
    cartItems: cloneCartItems
  };
};
