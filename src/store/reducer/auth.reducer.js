import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { callApi } from "../../service/apiService";
import { BE_URL } from "../../environment";

const initialState = {
  isLoading: false,
  information: {},
  error: null,
};

export const login = createAsyncThunk('login', async (values) => {
  const res = await callApi({ url: `${BE_URL}/api/auth/login`, body: values, method: 'post' })
  return res.data;
})

export const authSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        return {
          ...state, isLoading: true
        }
      })
      .addCase(login.fulfilled, (state, action) => {
        if (action.payload.success) {
          return {
            ...state, isLoading: false, information: action.payload, error: null
          }
        }
        return {
          ...state, isLoading: false, error: action.payload, information: {}
        }
      })
      .addCase(login.rejected, (state, action) => {
        return {
          ...state, isLoading: false, error: action.error.message
        }
      })
  },
})
export default authSlice.reducer;