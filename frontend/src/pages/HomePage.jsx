import { useState } from "react";

import LegumeCard from "../components/LegumeCard";
import SearchBar from "../components/SearchBar";

function HomePage() {
  const [searchText, setSearchText] = useState("");

  return (
    <div>
      <h1>Mes bios légumes</h1>
      <SearchBar setSearchText={setSearchText} />
      <LegumeCard searchText={searchText} />
    </div>
  );
}

export default HomePage;
