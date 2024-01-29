import { useEffect, useState } from "react";
import Modal from "../../components/Modal/Modal";

const Potions = () => {
  const [potions, setPotions] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedPotion, setSelectedPotion] = useState(null);

  useEffect(() => {
    const fetchPotions = async () => {
      try {
        const response = await fetch(
          "http://localhost/fantasy-store-api/api/items/potions.php"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch potions items");
        }
        const data = await response.json();
        setPotions(data);
      } catch (error) {
        console.log("Error fetching potions items:", error.message);
      }
    };
    fetchPotions();
  }, []);

  const handleBuyClick = (item) => {
    setSelectedPotion(item);
    setShowModal(true);
  };

  const handleBuyConfirmation = () => {
    // Implement logic for buying the selected armor
    // You might want to make an API call, update the state, etc.
    console.log(`Buying ${selectedPotion.name}`);
    // Clear the selected armor and close the modal
    setSelectedPotion(null);
    setShowModal(false);
  };

  const handleCancelBuy = () => {
    setSelectedPotion(null);
    setShowModal(false);
  };

  return (
    <div>
      <h2>Potions</h2>
      <ul>
        {potions.map((item) => (
          <li key={item.id}>
            <h3>{item.name}</h3>
            <img src={item.image_url} alt={item.name} />
            <p>{item.description}</p>
            <p>${item.price}</p>
            <button onClick={() => handleBuyClick(item)}>
              Buy {item.name}
            </button>
          </li>
        ))}
      </ul>
      {showModal && selectedPotion && (
        <Modal>
          <div>
            <h1>Would you like to buy a {selectedPotion.name}?</h1>
            <img
              src={selectedPotion.image_url}
              alt={selectedPotion.name}
              width={300}
              height={200}
            />
            <h3>${selectedPotion.price}</h3>
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

export default Potions;
