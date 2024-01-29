import { useState, useEffect } from "react";
import Modal from "../../components/Modal/Modal";

const Weapons = () => {
  const [weapons, setWeapons] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedWeapon, setSelectedWeapon] = useState(null);

  useEffect(() => {
    const fetchWeapons = async () => {
      try {
        const response = await fetch(
          "http://localhost/fantasy-store-api/api/items/weapons.php"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch weapons items");
        }
        const data = await response.json();
        setWeapons(data);
      } catch (error) {
        console.log("Error fetching weapons items:", error.message);
      }
    };
    fetchWeapons();
  }, []);

  const handleBuyClick = (item) => {
    setSelectedWeapon(item);
    setShowModal(true);
  };

  const handleBuyConfirmation = () => {
    // Implement logic for buying the selected armor
    // You might want to make an API call, update the state, etc.
    console.log(`Buying ${selectedWeapon.name}`);
    // Clear the selected armor and close the modal
    setSelectedWeapon(null);
    setShowModal(false);
  };

  const handleCancelBuy = () => {
    setSelectedWeapon(null);
    setShowModal(false);
  };

  return (
    <div>
      <h2>Weapons</h2>
      <ul>
        {weapons.map((item) => (
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
      {showModal && selectedWeapon && (
        <Modal>
          <div>
            <h1>Would you like to buy a {selectedWeapon.name}?</h1>
            <img
              src={selectedWeapon.image_url}
              alt={selectedWeapon.name}
              width={300}
              height={200}
            />
            <h3>${selectedWeapon.price}</h3>
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

export default Weapons;
