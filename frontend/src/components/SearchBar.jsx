import React from "react";
import "./SearchBar.css";

function SearchBar({ searchText, setSearchText }) {
  return (
    <div className="search-bar">
      <input
        className="searchInput"
        type="text"
        placeholder="cherche ton bio légume..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
