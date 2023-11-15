// App.jsx
import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import LegumeCard from "./components/LegumeCard";

function App() {
  const [searchText, setSearchText] = useState("");

  return (
    <div>
      <SearchBar setSearchText={setSearchText} />
      <LegumeCard searchText={searchText} />
    </div>
  );
}

export default App;
