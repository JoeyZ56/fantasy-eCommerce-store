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
        "http://localhost/fantasy-store-api/api/cart/endpoints/getCartContent.php",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );
      if (!res.ok) throw new Error("Failed to fetch cart items");

      const data = await res.json();
      console.log("Fetched cart items:", data.cartContents); // Log the cart contents

      if (data.cartContents && Array.isArray(data.cartContents)) {
        setCartItems(data.cartContents);
      } else if (data.error) {
        setError(data.error);
        setCartItems([]);
      } else {
        throw new Error("Unexpected response format");
      }
    } catch (error) {
      console.error("Error fetching cart items:", error);
      setError(`Failed to fetch cart items. ${error.message}`);
      setCartItems([]);
    } finally {
      setLoading(false);
    }
  };

  const removeFromCart = async (item_id) => {
    try {
      const response = await fetch(
        `http://localhost/fantasy-store-api/api/cart/endpoints/removeFromCart.php?item_id=${item_id}`,
        {
          method: "DELETE",
          credentials: "include",
        }
      );

      const responseBody = await response.json();

      if (!response.ok) {
        throw new Error(
          responseBody.error || "Failed to delete item from cart"
        );
      }

      console.log(
        `Deleted item with id ${item_id} from the cart`,
        "Updated Cart Data:",
        responseBody
      );
    } catch (error) {
      console.error("Error deleting item from cart:", error.message);
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
        <div className="cart-info">
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <h3>{item.name}</h3>
                <img src={item.image_url} alt={item.name} />
                <p>${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <button
                  onClick={() => {
                    console.log(`Removing item with id: ${item.id}`);
                    removeFromCart(item.id);
                  }}
                  className="delete-button"
                >
                  Remove from Cart
                </button>
              </li>
            ))}
          </ul>
          <h4>Total Price: ${totalPrice.toFixed(2)}</h4>
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
