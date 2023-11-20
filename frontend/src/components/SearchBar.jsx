import React from "react";
import "./SearchBar.css";

function SearchBar({ searchText, setSearchText }) {
  return (
    <div className="searchContainer">
      <div className="search-bar">
        <h2>Mes bios légumes</h2>
        <input
          className="searchInput"
          type="text"
          placeholder="cherche ton bio légume..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
    </div>
  );
}

export default SearchBar;
