import { useState } from "react";
import LegumeCard from "../components/LegumeCard";
import SearchBar from "../components/SearchBar";

function HomePage() {
  const [searchText, setSearchText] = useState("");
  return (
    <div>
      <SearchBar setSearchText={setSearchText} />
      <LegumeCard searchText={searchText} />
    </div>
  );
}

export default HomePage;
