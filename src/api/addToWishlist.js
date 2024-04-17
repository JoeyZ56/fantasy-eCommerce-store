const addToWishlis = async (item_id) => {
  try {
    const res = await fetch(
      "http://localhost/fantasy-store-api/api/Wishlist/Wishlist.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ item_id }),
        credentials: "include",
      }
    );
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log("Error adding item to wishlist:", error.message);
  }
};

export default addToWishlis;
