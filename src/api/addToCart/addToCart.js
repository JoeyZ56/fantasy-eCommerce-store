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
        body: JSON.stringify({ item_id }),
      }
    );

    const responseText = await response.text();

    try {
      let responseBody;
      try {
        responseBody = JSON.parse(responseText);
      } catch (parseError) {
        console.error("Error parsing response JSON:", parseError.message);
        throw new Error("Invalid JSON response");
      }

      if (!response.ok) {
        throw new Error(responseBody.error || "Failed to add item to cart");
      }

      console.log(`Added item with id ${item_id} to the cart`);
      console.log("Updated Cart Data:", responseBody);
    } catch (error) {
      console.error("Error adding item to cart:", error.message);
    }
  } catch (error) {
    console.error("Error adding item to cart:", error.message);
    // Set a state variable to track the error and display it to the user
  }
};

export default addToCart;
