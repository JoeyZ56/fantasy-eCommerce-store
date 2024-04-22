const addToWishlist = async (item_id) => {
  try {
    const res = await fetch(
      `http://localhost/fantasy-store-api/api/wishlist/add-to-wishlist.php`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify([item_id]),
        credentials: "include",
      },
      console.log(`Added item with id ${item_id} to the wishlist`)
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
