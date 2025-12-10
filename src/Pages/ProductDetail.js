import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../Components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductIdRequest } from "../Redux/actions/productDetailAction";
import { addToCart } from "../Redux/actions/cartActions";
import { addToWishlist } from "../Redux/actions/wishListAction";

function ProductDetail({ isAuthenticated }) {
  const { id } = useParams();
  const [wishListmessage, setWishlistmessage] = useState("");
  const [cartMessage, setCartmessage] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();
  
  const productData = useSelector((state) => state.product.product);
  const wishListItems = useSelector((state) => state.wishList.wishListItmes);

  const handleWishlist = () => {
    const isAlreadywishlist = wishListItems.some(
      (item) => item._id === productData._id
    );
    if (isAuthenticated) {
      if (isAlreadywishlist) {
        setWishlistmessage("Already in wishlist");
      } else {
        dispatch(addToWishlist(productData));
        setWishlistmessage("Added to wishlist!");
      }
      setTimeout(() => setWishlistmessage(""), 2000);
    } else {
      console.log("hello");
      navigate("/login");
    }
  };

  useEffect(() => {
    dispatch(fetchProductIdRequest(id));
  }, [dispatch, id]);

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
          {productData?.images?.length > 0 && (
          <img
            src={productData.images[0].url}
            alt={productData.title}
            style={{ width: "100%", borderRadius: "8px" }}
          />
          /* <img
            src={productData.images[1].url}
            alt={productData.title}
            style={{ width: "100%", borderRadius: "8px" }}
          /> */
          )}
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
            style={{
              fontSize: "22px",
              fontWeight: "bold",
              marginBottom: "10px",
            }}
          >
            ₹{productData.price}
          </p>
          <p style={{ color: "green", marginBottom: "20px" }}>
            Inclusive of all taxes
          </p>
          {cartMessage && (
            <p
              style={{
                color: "green",
                fontWeight: "500",
                margin: 0,
              }}
            >
              {cartMessage}
            </p>
          )}

          {/* ✅ Wrap both buttons + message inside a flex div */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginTop: "20px",
            }}
          >
            <button
              onClick={() => {
                dispatch(addToCart(productData));
                setCartmessage("Added to cart!");
                setTimeout(() => setCartmessage(""), 2000);
              }}
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

            <button
              className="btn border-black hover:border-none font-medium tracking-wide"
              onClick={handleWishlist} // ✅ Use the new handler
            >
              WISHLIST
            </button>

            {/* ✅ Conditionally show message beside button */}
            {wishListmessage && (
              <p
                style={{
                  color: "green",
                  fontWeight: "500",
                  margin: 0,
                }}
              >
                {wishListmessage}
              </p>
            )}
          </div>

          <div style={{ marginTop: "30px" }}>
            <h4 style={{ marginBottom: "8px" }}>Product Details</h4>
            <ul
              style={{ paddingLeft: "20px", color: "#333", lineHeight: "1.6" }}
            >
              <li>Contemporary style</li>
              <li>Material: Plastic</li>
              <li>Shape: Round</li>
              <li>Warranty: 6 months</li>
              <p>{productData.description}</p>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductDetail;
