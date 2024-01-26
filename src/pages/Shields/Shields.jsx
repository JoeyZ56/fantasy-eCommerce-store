import { useState, useEffect } from "react";

const Shields = () => {
  const [shields, setShields] = useState([]);

  useEffect(() => {
    const fetchShields = async () => {
      const response = await fetch(
        "http://localhost/fantasy-store-api/api/items/shields.php"
      );
      const data = await response.json();
      setShields(data);
    };
    fetchShields();
  }, []);

  return (
    <div>
      <h2>Shields</h2>
      <ul>
        {shields.map((item) => (
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

export default Shields;
