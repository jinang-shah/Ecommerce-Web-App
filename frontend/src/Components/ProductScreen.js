import React from "react";
import "./ProductScreen.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetails } from "../redux/action/productAction";
import { addToCart } from "../redux/action/cartAction";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router";

const ProductScreen = ({ match }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.getProductDetails);
  const { loading, error, product } = productDetails;

  const { id } = useParams();
  let history = useHistory();

  useEffect(() => {
    console.log("useEffect executed");
    if (product && id !== product._id) {
      dispatch(getProductDetails(id));
    }
  }, [dispatch,id]);

  const addToCartHandler = () => {
    dispatch(addToCart(product._id, qty));
    history.push("/cart");
  };

  return (
    <div className="productScreen">
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <div className="productscreen_left">
            <div className="left_image">
              <img src={product.imageUrl} alt={product.name} />
            </div>
            <div className="left_info">
              <p className="left_name">{product.name}</p>
              <p className="left_price">${product.price}</p>
              <p className="left_decription">{product.description}</p>
            </div>
          </div>
          <div className="productscreen_right">
            <div className="right_info">
              <p>
                Price:<span>${product.price}</span>
              </p>
              <p>
                Status:{" "}
                <span className={product.countInStock > 0 ? "inStock":"outOfStock"}>
                  {product.countInStock > 0 ? "In Stock" : "Out of stock"}
                </span>
              </p>
              <p>
                Qty
                <select value={qty} onChange={(e) => setQty(e.target.value)}>
                  {[...Array(product.countInStock).keys()].map((x) => (
                    <option value={x + 1} key={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </p>
              <p>
                <button type="button" onClick={addToCartHandler}>
                  Add to Cart
                </button>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductScreen;
