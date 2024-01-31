import { useState, useEffect } from "react";
import ErrorBoundary from "../../ErrorBoundary/ErrorBoundary";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const res = await fetch(
          "http://localhost/fantasy-store-api/api/cart/shopping-cart.php"
        );

        if (!res.ok) {
          throw new Error("Failed to fetch cart items");
        }

        const data = await res.json();
        setCartItems(data);
      } catch (error) {
        console.log("Error fetching cart items:", error.message);
      }
    };
    fetchCartItems();
  }, []);

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <h3>{item.name}</h3>
            <img src={item.image_url} alt={item.name} />
            <p>{item.price}</p>
            <p>{item.quantity}</p>
          </li>
        ))}
      </ul>
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
