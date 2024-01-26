import { useState, useEffect } from "react";

const Weapons = () => {
  const [weapons, setWeapons] = useState([]);

  useEffect(() => {
    const fetchWeapons = async () => {
      const response = await fetch(
        "http://localhost/fantasy-store-api/api/items/weapons.php"
      );
      const data = await response.json();
      setWeapons(data);
    };
    fetchWeapons();
  }, []);

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
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Weapons;
