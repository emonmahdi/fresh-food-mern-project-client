import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "../../Components/Home/Footer/Footer";
import Navigation from "../../Components/Home/Navigation/Navigation";
import AllProductsDesign from "./AllProductsDesign.js/AllProductsDesign";

const AllProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    axios.get("https://limitless-shore-74822.herokuapp.com/products").then((res) => {
      setAllProducts(res.data);
    });
  }, []);
  return (
    <div>
      <Navigation />
      <h3 className="text-success fw-bold my-5">This is our all products.{allProducts.length}</h3>
      <div className="container">
        <div className="row my-5y">
          {allProducts.map((allproduct) => (
            <AllProductsDesign
              key={allproduct._id}
              allproduct={allproduct}
            ></AllProductsDesign>
          ))}
        </div>
      </div> 
    </div>
  );
};

export default AllProducts;
