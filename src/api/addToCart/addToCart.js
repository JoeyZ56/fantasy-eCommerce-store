const addToCart = async (item_id) => {
  try {
    console.log(item_id);
    const response = await fetch(
      `http://localhost/fantasy-store-api/api/cart/endpoints/shopping-cart.php?item_id=${item_id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );

    const responseBody = await response.json();

    if (!response.ok) {
      throw new Error(responseBody.error || "Failed to add item to cart");
    }

    console.log(
      `Added item with id ${item_id} to the cart`,
      "Updated Cart Data:",
      responseBody
    );
  } catch (error) {
    console.error("Error adding item to cart:", error.message);
    // Optionally, throw the error or set a state variable to inform the user
  }
};

export default addToCart;
