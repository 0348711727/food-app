import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducer/product.reducer";
import thunk from "redux-thunk";
import cartReducer from "./reducer/cart.reducer";

const reducer = combineReducers({
  products: productReducer,
  cart: cartReducer
})

const middleware = [thunk];

const store = configureStore({
  reducer,
  middleware
})

export { store }
