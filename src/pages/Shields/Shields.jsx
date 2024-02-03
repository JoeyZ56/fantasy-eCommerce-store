import { useState, useEffect } from "react";
import Modal from "../../components/Modal/Modal";
import "./Shields.scss";

const Shields = () => {
  const [shields, setShields] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedShield, setSelectedShield] = useState(null);

  useEffect(() => {
    const fetchShields = async () => {
      try {
        const response = await fetch(
          "http://localhost/fantasy-store-api/api/items/shields.php"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch shields items");
        }
        const data = await response.json();
        setShields(data);
      } catch (error) {
        console.log("Error fetching shields items:", error.message);
      }
    };
    fetchShields();
  }, []);

  const handleBuyClick = (item) => {
    setSelectedShield(item);
    setShowModal(true);
  };

  const handleBuyConfirmation = () => {
    // Implement logic for buying the selected armor
    // You might want to make an API call, update the state, etc.
    console.log(`Buying ${selectedShield.name}`);
    // Clear the selected armor and close the modal
    setSelectedShield(null);
    setShowModal(false);
  };

  const handleCancelBuy = () => {
    setSelectedShield(null);
    setShowModal(false);
  };

  return (
    <div>
      <h2 className="shield-title">Shields</h2>
      <ul className="shield-list">
        {shields.map((item) => (
          <li key={item.id} className="shield-item">
            <h3>{item.name}</h3>
            <img src={item.image_url} alt={item.name} />
            <p>{item.description}</p>
            <p className="shield-item-price">${item.price}</p>
            <button onClick={() => handleBuyClick(item)}>
              Buy {item.name}
            </button>
          </li>
        ))}
      </ul>
      {showModal && selectedShield && (
        <Modal>
          <div className="modal-container">
            <h1>Would you like to buy the {selectedShield.name}?</h1>
            <img
              src={selectedShield.image_url}
              alt={selectedShield.name}
              width={300}
              height={200}
              className="modal-image"
            />
            <h3>${selectedShield.price}</h3>
            <div className="modal-btns">
              <button onClick={handleBuyConfirmation} className="modal-btn">
                Add To Cart
              </button>
              <button onClick={handleCancelBuy} className="modal-btn">
                Take Me back
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Shields;
