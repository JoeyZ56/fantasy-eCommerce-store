const addToWishlist = async (item_id, user_id) => {
  try {
    const res = await fetch(
      `http://localhost/fantasy-store-api/api/wishlist/add-to-wishlist.php?item_id=${item_id}&user_id=${user_id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );

    const responseBody = await res.json();

    if (!res.ok) {
      throw new Error(
        responseBody.error || "Failed to add item to wishlist, Frontend Error"
      );
    }

    console.log(
      `Added item with id ${item_id} to the wishlist`,
      "Updated Wishlist Data:",
      responseBody
    );
  } catch (error) {
    console.log("Error adding item to wishlist Frontend:", error.message);
  }
};

export default addToWishlist;
