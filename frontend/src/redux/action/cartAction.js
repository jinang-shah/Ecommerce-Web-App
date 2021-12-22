import * as actionType from "../constants/cartConstants";
import axios from "axios";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`);

  console.log("add to cart action")
 
  dispatch({
    type: actionType.ADD_TO_CART,
    payload: {
      product: data.id,
      name: data.name,
      imageUrl: data.imageUrl,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {

  console.log("remove from cart action")
  dispatch({
    type: actionType.REMOVE_FROM_CART,
    payload: id,
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};
