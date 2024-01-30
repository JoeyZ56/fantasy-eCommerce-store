import { useState, useEffect } from "react";

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

export default Cart;
