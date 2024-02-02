import { useState, useEffect } from "react";
import ErrorBoundary from "../../ErrorBoundary/ErrorBoundary";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCartItems = async () => {
    try {
      const res = await fetch(
        "http://localhost/fantasy-store-api/api/cart/shopping-cart.php"
      );

      console.log("Full Response:", res);

      if (!res.ok) {
        throw new Error("Failed to fetch cart items");
      }

      // Convert the response body to JSON
      const data = await res.json();

      console.log("Cart items:", data);
      setCartItems(data);

      if (Array.isArray(data) && data.length === 0) {
        setError("Your cart is empty.");
      }
    } catch (error) {
      console.error("Error fetching cart items:", error);
      setError(`Failed to fetch cart items. ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  console.log("Cart items before reduce:", cartItems);
  let totalPrice = 0;
  if (Array.isArray(cartItems) && cartItems.length > 0) {
    totalPrice = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  return (
    <div>
      <h2>Cart</h2>
      {Array.isArray(cartItems) && cartItems.length > 0 ? (
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
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

function CartErrorBoundary(props) {
  return (
    <ErrorBoundary
      errorComponent={
        <h2>
          This listing has an error. <Link to="/">Click here</Link> to go back
          to the home page.
        </h2>
      }
    >
      <Cart {...props} />
    </ErrorBoundary>
  );
}

export default CartErrorBoundary;
