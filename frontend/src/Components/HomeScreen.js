import React from "react";
import "./HomeScreen.css";
import Product from "./Product";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts as listProducts } from "../redux/action/productAction";

const HomeScreen = () => {
  const dispatch = useDispatch();
  let getProducts = useSelector((state) => state.getProduct);
  let { products, loading, error } = getProducts;

  const [inputCatagory, setCatagory] = useState("catagory");

  function checkCatagory(product) {
    return product.catagory === inputCatagory;
  }

  useEffect(() => {
    dispatch(listProducts());
    console.log(products);
  }, [dispatch]);

  useEffect(() => {
    products = products.map((product) =>
      product.catagory === inputCatagory ? product : null
    );
    console.log("products", products);
  }, [inputCatagory]);

  return (
    <div className="homeScreen">
      <div className="homeScreen_header">
        <h2 className="homescreen_title">Latest Products</h2>
        <div>
          <select
            className="homeScreen_select"
            onChange={(e) => setCatagory(e.target.value)}
          >
            <option> Select Catagory</option>
            <option value="electronics">electronics</option>
            <option value="fashion">fashion</option>
            <option value="mobiles">mobiles</option>
            <option value="furtinure">furtinure</option>
          </select>
        </div>
      </div>
      <div className="homescreen_products">
        {loading ? (
          <svg>
            <circle cx="35" cy="35" r="20"></circle>
          </svg>
        ) : error ? (
          <h2>{error}</h2>
        ) : inputCatagory === "catagory" ? (
          products.map((product) => (
            <Product
              key={product._id}
              imageUrl={product.imageUrl}
              name={product.name}
              productId={product._id}
              price={product.price}
              description={product.description}
            />
          ))
        ) : (
          products.map((product) =>
            product.catagory === inputCatagory ? (
              <Product
                key={product._id}
                imageUrl={product.imageUrl}
                name={product.name}
                productId={product._id}
                price={product.price}
                description={product.description}
              />
            ) : null
          )
        )}
      </div>
    </div>
  );
};

export default HomeScreen;
