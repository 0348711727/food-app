import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducer/product.reducer";
import thunk from "redux-thunk";

const reducer = combineReducers({
  products: productReducer
})

const middleware = [thunk];

const store = configureStore({
  reducer,
  middleware
})

export { store }
