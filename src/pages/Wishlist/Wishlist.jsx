import { useEffect, useState } from "react";
import "./Wishlist.scss";

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchWishList = async () => {
    try {
      const res = await fetch(
        "http://localhost/fantasy-store-api/api/Wishlist/get-wishlist.php",
        {
          method: "GET",
          credentials: "include",
        }
      );

      if (!res.ok) throw new Error("Failed to fetch wishlist Frontend Error");

      const data = await res.json();
      console.log("Wishlist Data:", data);

      if (data.wishlistContents && Array.isArray(data.wishlistContents)) {
        setWishlistItems(data.wishlistContents);
      } else if (data.error) {
        setError(data.error);
        setWishlistItems([]);
      } else {
        throw new Error("Invalid Wishlist Data");
      }
    } catch (error) {
      console.log("Error fetching wishlist", error);
      setError(`Failed to fetch wishlist, ${error.message}`);
      setWishlistItems([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWishList();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="main-container">
      <h1 className="title">Wishlist</h1>
      <div className="wishlist-items">
        {wishlistItems.map((item) => (
          <div key={item.item_id} className="wishlist-item">
            <img src={item.image_url} alt={item.name} />
            <div className="item-details">
              <h2 className="item-name">{item.name}</h2>
              <p className="item-price">${item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
