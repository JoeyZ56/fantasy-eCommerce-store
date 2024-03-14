import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ErrorBoundary from "../../ErrorBoundary/ErrorBoundary";
import "./Cart.scss";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCartItems = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        "http://localhost/fantasy-store-api/api/cart/endpoints/getCartContent.php"
      );
      if (!res.ok) throw new Error("Failed to fetch cart items");

      const response = await res.json(); // Get the full response
      console.log("Response from getCartContent.php:", response);

      // Check for 'cartContents' in the response
      if (response.cartContents && Array.isArray(response.cartContents)) {
        setCartItems(response.cartContents);
      } else if (response.error) {
        // Handle error response (e.g., empty cart)
        setError(response.error);
        setCartItems([]); // Ensure cartItems is an empty array if there's an error
      } else {
        throw new Error("Unexpected response format");
      }
    } catch (error) {
      console.error("Error fetching cart items:", error);
      setError(`Failed to fetch cart items. ${error.message}`);
      setCartItems([]); // Ensure cartItems is always an array, even on error
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  console.log("Cart items before reduce:", cartItems);
  let totalPrice = Array.isArray(cartItems)
    ? cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
    : 0;

  return (
    <div className="cart-container">
      <h2>Cart</h2>
      {cartItems.length > 0 ? (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <h3>{item.name}</h3>
                <img src={item.image_url} alt={item.name} />
                <p>${item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </li>
            ))}
          </ul>
          <p>Total Price: ${totalPrice.toFixed(2)}</p>
        </div>
      ) : (
        <div className="link-container">
          <p className="empty-cart">Your cart is empty.</p>
          <Link to="/" className="link">
            Return to Home Page
          </Link>
        </div>
      )}
    </div>
  );
};

function CartErrorBoundary(props) {
  return (
    <ErrorBoundary
      errorComponent={
        <h2>
          This listing has an error. <Link to="/">Return Home</Link> to go back
          to the home page.
        </h2>
      }
    >
      <Cart {...props} />
    </ErrorBoundary>
  );
}

export default CartErrorBoundary;
