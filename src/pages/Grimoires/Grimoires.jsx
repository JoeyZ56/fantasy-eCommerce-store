import { useState, useEffect } from "react";
import Modal from "../../components/Modal/Modal";
import "./Grimoires.scss";

const Grimoires = () => {
  const [grimoires, setGrimoires] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedGrimoire, setSelectedGrimoire] = useState(null);

  useEffect(() => {
    const fetchGrimoires = async () => {
      try {
        const response = await fetch(
          "http://localhost/fantasy-store-api/api/items/grimoires.php"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch grimoires items");
        }
        const data = await response.json();
        setGrimoires(data);
      } catch (error) {
        console.error("Error fetching grimoires items:", error.message);
      }
    };
    fetchGrimoires();
  }, []);

  const handleBuyClick = (item) => {
    setSelectedGrimoire(item);
    setShowModal(true);
  };

  const handleBuyConfirmation = () => {
    // Implement logic for buying the selected armor
    // You might want to make an API call, update the state, etc.
    console.log(`Buying ${selectedGrimoire.name}`);
    // Clear the selected armor and close the modal
    setSelectedGrimoire(null);
    setShowModal(false);
  };

  const handleCancelBuy = () => {
    setSelectedGrimoire(null);
    setShowModal(false);
  };

  return (
    <div>
      <h2 className="grimoire-title">Grimoires</h2>
      <ul className="grimoire-list">
        {grimoires.map((item) => (
          <li key={item.id} className="grimoire-item">
            <h3>{item.name}</h3>
            <img src={item.image_url} alt={item.name} />
            <p>{item.description}</p>
            <p className="grimoire-item-price">${item.price}</p>
            <button onClick={() => handleBuyClick(item)}>
              Buy {item.name}
            </button>
          </li>
        ))}
      </ul>
      {showModal && selectedGrimoire && (
        <Modal>
          <div className="modal-container">
            <h1>Would you like to buy {selectedGrimoire.name}?</h1>
            <img
              src={selectedGrimoire.image_url}
              alt={selectedGrimoire.name}
              width={300}
              height={200}
              className="modal-image"
            />
            <h3>${selectedGrimoire.price}</h3>
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

export default Grimoires;
