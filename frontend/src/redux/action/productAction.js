import * as actionType from "../constants/productConstants";
import axios from "axios";

export const getProducts = () => async (dispatch) => {
  try {
    dispatch({ type: actionType.GET_PRODUCT_REQUEST });

    const { data } = await axios.get("/api/products");
    dispatch({
      type: actionType.GET_PRODUCT_SUCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionType.GET_PRODUCT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionType.GET_PRODUCT_DETAILS_REQUEST });
    const { data } = await axios.get(`/api/products/${id}`);
    dispatch({
      type: actionType.GET_PRODUCT_DETAILS_SUCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionType.GET_PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const removeProductDetails = () => (dispatch) => {
  dispatch({
    type: actionType.GET_PRODUCT_DETAILS_RESET,
  });
};
