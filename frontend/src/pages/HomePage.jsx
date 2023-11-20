import { useState } from "react";
import LegumeCard from "../components/LegumeCard";
import SearchBar from "../components/SearchBar";
import Baclground from "../components/Baclground";
import Footer from "../components/Footer";
import Advice from "../components/Advice";

function HomePage() {
  const [searchText, setSearchText] = useState("");
  return (
    <div>
      <Baclground />
      <Advice />
      <SearchBar setSearchText={setSearchText} />
      <LegumeCard searchText={searchText} />
      <Footer />
    </div>
  );
}

export default HomePage;
