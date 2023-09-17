import {
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  ALL_PRODUCT_FAILURE,
} from '../constants/product.constants';

export const allProductRequest = () => ({
  type: ALL_PRODUCT_REQUEST,
});

export const allProductSuccess = (payload) => ({
  type: ALL_PRODUCT_SUCCESS,
  payload,
});

export const allProductFailure = (payload) => ({
  type: ALL_PRODUCT_FAILURE,
  payload,
});
