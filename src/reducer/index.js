import { combineReducers } from "redux";
import products from "./products";
import cartItems from './cartItems'
import cartTotal from "./cartTotal";

export default combineReducers({
    products,
    cartItems,
    cartTotal
})