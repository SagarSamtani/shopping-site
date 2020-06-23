import { combineReducers } from "redux";
import cartReducer from "./cart/cartReducer";
import productReducer from "./product/productReducer";


const reducers = combineReducers({
    cartReducer,
    productReducer
  });
  
  export default reducers;