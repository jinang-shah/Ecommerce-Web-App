import React from "react";
import CartItem from "./CartItem";
import "./CartScreen.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../redux/action/cartAction";

const CartScreen = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const { cartItems } = cart;

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
    console.log("qtyChangeHandler executed")
  };

  const removeHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCartSubTotal = () => {
    return cartItems.reduce((price, item) => item.price * item.qty + price, 0);
  };

  return (
    <div className="cartscreen">
      <div className="cartscreen_left">
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <>
            Opps !!! Your Cart is Empty
            <Link to="/" className="cartempty">
              Shop Now
            </Link>
          </>
        ) : (
          cartItems.map((item) => (
            <CartItem
              key={item.product}
              item={item}
              qtyChangeHandler={qtyChangeHandler}
              removeHandler={removeHandler}
            />
          ))
        )}
      </div>
      <div className="cartscreen_right">
        <div className="cartscreen_info">
          <p>Subtotal ({getCartCount()}) items</p>
          <p>${getCartSubTotal().toFixed(2)}</p>
        </div>
        <div>
          <Link to="/checkout" className="checkout_link">Proced To Checkout</Link>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;

// {cartItems.length=== 0 ? (
//   <div>
//     Your Cart is Empty !!! <Link to="/">Shop Now</Link>
//     <div/>
// ) : cartItems.map((item)=> <CartItem />) }
