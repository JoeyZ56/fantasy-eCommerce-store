import { useEffect, useState } from "react";

const Potions = () => {
  const [potions, setPotions] = useState([]);

  useEffect(() => {
    const fetchPotions = async () => {
      const response = await fetch(
        "http://localhost/fantasy-store-api/api/items/potions.php"
      );
      const data = await response.json();
      setPotions(data);
    };
    fetchPotions();
  }, []);
  return (
    <div>
      <h2>Potions</h2>
      <ul>
        {potions.map((item) => (
          <li key={item.id}>
            <h3>{item.name}</h3>
            <img src={item.image_url} alt={item.name} />
            <p>{item.description}</p>
            <p>{item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Potions;
