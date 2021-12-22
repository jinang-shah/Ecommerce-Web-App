import * as actionType from "../constants/productConstants";

export const getProductReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case actionType.GET_PRODUCT_REQUEST:
      return {
        loading: true,
        products: [],
      };
    case actionType.GET_PRODUCT_SUCESS:
      return {
        loading: false,
        products: action.payload,
      };
    case actionType.GET_PRODUCT_FAIL:
      return {
        loading: false,
        error:action.payload,
      };
    default:
      return state;
  }
};

export const getProductDetailsReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case actionType.GET_PRODUCT_DETAILS_REQUEST:
      return {
        loading: true,
        product: {},
      };
    case actionType.GET_PRODUCT_DETAILS_SUCESS:
      return {
        loading: false,
        product: action.payload,
      };
    case actionType.GET_PRODUCT_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case actionType.GET_PRODUCT_DETAILS_RESET:
        return{
            product:{}
        }  
    default:
      return state;
  }
};
