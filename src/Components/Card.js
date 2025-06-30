import React, { useEffect, useState } from "react";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";

const ProductCard = () => {
  const [hoveredId, setHoveredId] = useState(false);
  const [productList, setProductList] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    // best practice to use functions call inside the useEffect
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const result = await response.json();
      //   fetch('https://jsonplaceholder.typicode.com/todos/1')
      // .then(response => response.json())

      // .then(json => setProductList(json);)

      setProductList(result);
    } catch (error) {
      console.error("Error Fetching data: ", error);
    }
  };

  return (
    <div className="container">
      <div className="card-wrapper">
        {productList.map((item) => (
          <div
            key={item.id}
            className="card"
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
            onClick={() => {
              navigate("/Prodectdetails/" + item.id);
            }}
          >
            <div
              className={`wishlist-icon ${
                hoveredId === item.id ? "hovered" : ""
              }`}
            >
              ♥
            </div>

            <div className="image-container">
              <img src={item.image} alt="Mobile Phone" />
              <div className="rating">
                {item.rating.rate} ★ {item.rating.count}
              </div>
            </div>
            <div className="info">
              <div className="brand">{item.title}</div>
              {/* <div className="title">{item.description}</div> */}
              <div className="price-section">
                <span className="price">{item.price}</span>
                <span className="strike">₹1,19,999</span>
                <span className="discount">21% off</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
