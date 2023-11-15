// SearchBar.jsx
import React from "react";
import "./SearchBar.css";

function SearchBar({ setSearchText }) {
  return (
    <div className="searchContainer">
      <div className="search-bar">
        <input
          className="searchInput"
          type="text"
          placeholder="cherche ton bio légume..."
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <h2>Mes bios légumes</h2>
    </div>
  );
}

export default SearchBar;
