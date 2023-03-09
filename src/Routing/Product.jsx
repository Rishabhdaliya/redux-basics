import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Products.css";

export const Product = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    const data = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        // enter you logic when the fetch is successful
        setProducts(data);
      } catch (error) {
        // enter your logic for when there is an error (ex. error toast)
        console.log(error);
      }
    };
    data();
  }, []);
  React.useEffect(() => {}, [products]);

  console.log(products);

  const productDetailhandler = (_id, title) => {
    if (_id) {
      navigate(`/products/${title}/${_id}/buy`);
    }
  };

  return (
    <div>
      <div className="allproducts">
        {products.products &&
          products?.products.map((elm, index) => (
            <div
              key={index}
              onClick={() => productDetailhandler(elm.id, elm.title)}
              className="products"
            >
              <img src={elm.images[0]} alt="" />
              <h5>{elm.title}</h5>
              <p>{elm.category}</p>
              <p>{elm.price}</p>
            </div>
          ))}
      </div>
    </div>
  );
};
