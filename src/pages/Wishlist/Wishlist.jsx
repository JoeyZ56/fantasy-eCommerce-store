import { useEffect, useState } from "react";
import "./Wishlist.scss";

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const addToWishlis = async (item_id) => {
    try {
      const res = await fetch(
        "http://localhost/fantasy-store-api/api/Wishlist/get-wishlist.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ item_id }),
          credentials: "include",
        }
      );
      if (!res.ok) throw new Error("Failed to add item to wishlist");

      const data = await res.json();
      console.log("Added item to wishlist:", data);

      if (data.wishlistContents && Array.isArray(data.wishlistContents)) {
        setWishlistItems(data.wishlistContents);
      } else if (data.error) {
        setError(data.error);
        setWishlistItems([]);
      } else {
        throw new Error("Unexpected response format");
      }
    } catch (error) {
      console.error("Error adding item to wishlist:", error);
      setError(`Failed to add item to wishlist. ${error.message}`);
      setWishlistItems([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    addToWishlis();
  }, []);

  if (loading) {
    return <div className="main-container">Loading...</div>;
  }
  if (error) {
    return <div className="main-container">{error}</div>;
  }

  return (
    <div className="main-container">
      <h1 className="title">Wishlist</h1>
      <div className="wishlist-items">
        {wishlistItems.map((item) => (
          <div key={item.item_id} className="wishlist-item">
            <img
              src={`http://localhost/fantasy-store-api/${item.image}`}
              alt={item.name}
              className="item-image"
            />
            <div className="item-details">
              <h2 className="item-name">{item.name}</h2>
              <p className="item-price">${item.price}</p>
              {/* <button
                className="remove-from-wishlist"
                onClick={() => removeFromWishlist(item.item_id)}
              >
                Remove from wishlist
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
