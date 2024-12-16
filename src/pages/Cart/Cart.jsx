import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
      console.log("Fetched cart items:", data.cartContents);

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
    console.log(
      "Attempting to remove item from cart using button click with the id:",
      item_id
    );

    if (!item_id) {
      console.error("No item id provided to remove from cart");
      return;
    }
    const apiKey = import.meta.env.VITE_API_KEY;
    try {
      const response = await fetch(
        `${apiKey}/api/cart/endpoints/removeFromCart.php?item_id=${item_id}`,
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

      // Update the cart items state to reflect the removal
      setCartItems((currentItems) =>
        currentItems.filter((item) => item.item_id !== item_id)
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
      <h2>Cart Items:</h2>
      {cartItems.length > 0 ? (
        <div className="cart-info">
          <ul>
            {cartItems.map((item) => (
              <li key={item.item_id}>
                <h3>{item.name}</h3>
                <img src={item.image_url} alt={item.name} />
                <p>${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <button
                  onClick={() => {
                    console.log(`Removing item with id: ${item.item_id}`);
                    removeFromCart(item.item_id);
                  }}
                  className="delete-button"
                >
                  Remove from Cart
                </button>
              </li>
            ))}
          </ul>
          <div className="price-container">
            <h4 className="price">Total Price: ${totalPrice.toFixed(2)}</h4>
          </div>
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

export default Cart;
