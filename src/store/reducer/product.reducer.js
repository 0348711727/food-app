import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { BE_URL } from "../../environment";
import { callApi } from "../../service/apiService";
// import {
//   allProductRequest,
//   allProductSuccess,
//   allProductFailure,
// } from '../actions/product.actions';



const initialState = {
  isLoading: false,
  data: [],
  error: null,
};

export const fetchAllProduct = createAsyncThunk('fetchAll', async () => {
  const res = await callApi({ url: `${BE_URL}/api/product/allProduct`, method: 'get' })
  return res.data;
})

export const fetchDetailProduct = createAsyncThunk('fetchDetail', async (id) => {
  const res = await callApi({ url: `${BE_URL}/api/product/productDetail/${id}`, method: 'get' })
  return res.data.data;
})

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProduct.pending, (state) => {
        return {
          ...state, isLoading: true
        }
      })
      .addCase(fetchAllProduct.fulfilled, (state, action) => {
        return {
          ...state, isLoading: false, data: action.payload.data, error: null
        }
      })
      .addCase(fetchAllProduct.rejected, (state, action) => {
        return {
          ...state, isLoading: false, error: { ...state.error, error: action.error }
        }
      })

      .addCase(fetchDetailProduct.pending, (state) => {
        return {
          ...state, isLoading: true
        }
      })
      .addCase(fetchDetailProduct.fulfilled, (state, action) => {
        return { ...state, isLoading: false, detail: action.payload }
      })
      .addCase(fetchDetailProduct.rejected, (state, action) => {
        return {
          ...state, isLoading: false, error: { ...state.error, error: action.error }
        }
      })
  },
})

export default productSlice.reducer;