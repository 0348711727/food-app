import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./productSlice";

const reducer = combineReducers({
  products: productSlice.reducer
})

const store = configureStore({
  reducer
})

export { store }
