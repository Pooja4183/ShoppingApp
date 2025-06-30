import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "./Footer";

function ProductDetail({ onAddToCart, isLoggedIn }) {

  const [productData, setProdcutData] = useState("");
  // const[result,setResult]= useState('');
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const result = await response.json();
        setProdcutData(result);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchProduct();
  }, [id]);

  return (
    <>
    <div
      style={{
        padding: "40px",
        fontFamily: "Arial, sans-serif",
        maxWidth: "1000px",
        margin: "0 auto",
        display: "flex",
        gap: "40px",
      }}
    >
      {/* Product Image */}
      <div style={{ flex: 1 }}>
        <img
          src={productData.image}
          alt="Nautica Clock"
          style={{ width: "100%", borderRadius: "8px" }}
        />
      </div>

      {/* Product Details */}
      <div style={{ flex: 1 }}>
        <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>
          {productData.title}
        </h2>
        <p style={{ color: "#666", marginBottom: "20px" }}>
          {productData.category}
        </p>

        <p
          style={{ fontSize: "22px", fontWeight: "bold", marginBottom: "10px" }}
        >
          {productData.price}
        </p>
        <p style={{ color: "green", marginBottom: "20px" }}>
          Inclusive of all taxes
        </p>
        <button
          onClick={() => 
          onAddToCart(productData)}
          style={{
            padding: "10px 20px",
            backgroundColor: "#ff3e6c",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Add to Cart
        </button>
        <div style={{ marginTop: "30px" }}>
          <h4 style={{ marginBottom: "8px" }}>Product Details</h4>
          <ul style={{ paddingLeft: "20px", color: "#333", lineHeight: "1.6" }}>
            <li>Contemporary style</li>
            <li>Material: Plastic</li>
            <li>Shape: Round</li>
            <li>Warranty: 6 months</li>
            <p>{productData.description}</p>
          </ul>
        </div>
      </div>
      
    </div>
    <Footer/>
    </>
  );
}

export default ProductDetail;
