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
      .addCase([fetchAllProduct.pending, fetchDetailProduct.pending], (state) => {
        return {
          ...state, isLoading: true
        }
      })
      .addCase(fetchAllProduct.fulfilled, (state, action) => {
        if (action.payload.success) {
          return {
            ...state, isLoading: false, data: action.payload.data, error: null
          }
        }
        return {
          ...state, isLoading: false, error: action.payload
        }
      })
      .addCase(fetchAllProduct.rejected, (state, action) => {
        return {
          ...state, isLoading: false, error: action.error.message
        }
      })
      .addCase(fetchDetailProduct.fulfilled, (state, action) => {
        if (action.payload.success) {
          return { ...state, isLoading: false, detail: action.payload, error: null }
        }
        return { ...state, isLoading: false, error: action.payload }

      })
      .addCase(fetchDetailProduct.rejected, (state, action) => {
        return {
          ...state, isLoading: false, error: action.error
        }
      })
  },
})

export default productSlice.reducer;