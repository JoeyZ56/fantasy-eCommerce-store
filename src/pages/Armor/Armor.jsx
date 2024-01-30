import { useState, useEffect } from "react";
import Modal from "../../components/Modal/Modal";

const Armor = () => {
  const [armor, setArmor] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedArmor, setSelectedArmor] = useState(null);

  useEffect(() => {
    const fetchArmor = async () => {
      try {
        const response = await fetch(
          "http://localhost/fantasy-store-api/api/items/armors.php"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch armor items");
        }

        const data = await response.json();
        setArmor(data);
      } catch (error) {
        console.error("Error fetching armor items:", error.message);
      }
    };

    fetchArmor();
  }, []);

  const addToCart = async (product_id) => {
    try {
      const response = await fetch(
        `http://localhost/fantasy-store-api/api/cart/shopping-cart.php?product_id=${product_id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to add item to cart");
      }

      console.log(`Added item with id ${product_id} to the cart`);
      // You might want to update the UI or take other actions here
    } catch (error) {
      console.error("Error adding item to cart:", error.message);
      // Set a state variable to track the error and display it to the user
      // setErrorState(error.message);
    }
  };

  const handleBuyClick = (item) => {
    setSelectedArmor(item);
    setShowModal(true);
  };

  const handleBuyConfirmation = () => {
    // Implement logic for buying the selected armor
    // You might want to make an API call, update the state, etc.
    console.log(`Buying ${selectedArmor.name}`);
    // Clear the selected armor and close the modal
    setSelectedArmor(null);
    setShowModal(false);
    addToCart(selectedArmor.id);
  };

  const handleCancelBuy = () => {
    setSelectedArmor(null);
    setShowModal(false);
  };

  return (
    <div>
      <h2>Armors</h2>
      <ul>
        {armor.map((item) => (
          <li key={item.id}>
            <h3>{item.name}</h3>
            <img src={item.image_url} alt={item.name} />
            <p>{item.description}</p>
            <p>${item.price}</p>
            <button onClick={() => handleBuyClick(item)}>
              Add {item.name} to Cart
            </button>
          </li>
        ))}
      </ul>
      {showModal && selectedArmor && (
        <Modal>
          <div>
            <h1>Would you like to buy {selectedArmor.name}?</h1>
            <img
              src={selectedArmor.image_url}
              alt={selectedArmor.name}
              width={300}
              height={200}
            />
            <h3>${selectedArmor.price}</h3>
            <div className="buttons">
              <button onClick={handleBuyConfirmation}>Add To Cart</button>
              <button onClick={handleCancelBuy}>Take Me back</button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Armor;
