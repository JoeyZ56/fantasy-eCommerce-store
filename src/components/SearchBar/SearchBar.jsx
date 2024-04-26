import { useState } from "react";
import "./SearchBar.scss";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const onSearch = async (searchTerm) => {
    const url = `http://localhost/api/items/endpoints/getSearch.php?search=${encodeURIComponent(
      searchTerm
    )}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch");
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div className="search-bar-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleChange}
          className="search-bar"
        />
        <button type="submit" className="search-btn">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
