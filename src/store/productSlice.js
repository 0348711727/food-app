import { createSlice } from "@reduxjs/toolkit"

export const productSlice = createSlice({
  name: 'product',
  initialState: [],
  reducers: {
    addProduct: (state, action) => {
      state.push({ name: action.payload.name, price: action.payload.price })
    },
    deleteProduct: (state, action) => {
      state.splice(action.payload, 1)
    },
    sProduct: (state, action) => {
      state.filter((value) => value.includes(action.payload))
    },
    getAllProduct: (state, action) => {
      return { ...state }
    }
  }
})

export const { addProduct, deleteProduct, sProduct } = productSlice.actions;