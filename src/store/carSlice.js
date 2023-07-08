import { createSlice } from "@reduxjs/toolkit"

export const carSlice = createSlice({
  name: 'car',
  initialState: [],
  reducers: {
    addCar: (state, action) => {
      state.push({ name: action.payload.name, price: action.payload.price })
    },
    deleteCar: (state, action) => {
      state.splice(action.payload, 1)
    },
    sCar: (state, action) => {
      state.filter((value) => value.includes(action.payload))
    }
  }
})

export const { addCar, deleteCar, sCar } = carSlice.actions;