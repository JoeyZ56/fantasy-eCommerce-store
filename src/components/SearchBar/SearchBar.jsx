import { useState } from "react";
import "./SearchBar.scss";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const onSearch = async () => {
    const res = await fetch("");
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
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
        className="search-bar"
      />
      <button
        type="submit"
        value="search"
        onSubmit={handleSubmit}
        className="search-btn"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
