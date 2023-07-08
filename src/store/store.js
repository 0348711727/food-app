import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { carSlice } from "./carSlice";

const reducer = combineReducers({
  cars: carSlice.reducer
})

const store = configureStore({
  reducer
})

export { store }
