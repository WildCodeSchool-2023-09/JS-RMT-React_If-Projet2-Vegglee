import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import LegumeCard from "../components/LegumeCard";
import SearchBar from "../components/SearchBar";
import Baclground from "../components/Baclground";
import Advice from "../components/Advice";

function HomePage() {
  const [searchText, setSearchText] = useState("");
  const legumes = useLoaderData();
  return (
    <div>
      <Baclground />
      <Advice />
      <SearchBar setSearchText={setSearchText} />
      <LegumeCard searchText={searchText} />
    </div>
  );
}

export default HomePage;
