import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { callApi } from "../../service/apiService";

const initialState = {
  isLoading: false,
  data: [],
  error: null,
};
function compareData(obj1, obj2) {
  let str1 = JSON.stringify(obj1);
  let str2 = JSON.stringify(obj2);

  str1 = str1.replace(/"X"/g, '""');
  str2 = str2.replace(/"X"/g, '""');

  console.log(str1 === str2);
  return str1 === str2;
}

export const cartReducer = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log(state.data)
      const existInCart = state.data.findIndex((drink) => {
        return drink.size === action.payload.size && JSON.stringify(drink.topping) === JSON.stringify(action.payload.topping);
      })
      if (existInCart !== -1) {
        const newQuantity = state.data[existInCart].quantity + 1;
        const updatedData = [...state.data]; // Create a copy of the data array
        updatedData[existInCart] = { ...state.data[existInCart], quantity: newQuantity };
        return { ...state, data: updatedData };
      }
      return { ...state, data: [...state.data, action.payload] }
    }
  },
  extraReducers: (builder) => {
    // builder
    // .addCase([fetchAllProduct.pending, fetchDetailProduct.pending], (state) => {
    //   return {
    //     ...state, isLoading: true
    //   }
    // })
  },
})
export const { addToCart } = cartReducer.actions;
export default cartReducer.reducer;