import { useState, useEffect } from "react";
import Modal from "../../components/Modal/Modal";

// ... (imports)

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
              Buy {item.name}
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
              width={200}
              height={200}
            />
            <div className="buttons">
              <button onClick={handleBuyConfirmation}>Yes</button>
              <button onClick={handleCancelBuy}>No</button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Armor;
