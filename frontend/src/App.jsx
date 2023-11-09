import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import LegumeCard from "./components/LegumeCard";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  const legumes = useLoaderData();
  const [searchText, setSearchText] = useState("");

  return (
    <div>
      <div className="searchContainer">
        <SearchBar searchText={searchText} setSearchText={setSearchText} />{" "}
        <h1>Mes bios légumes</h1>
      </div>
      <div className="ctnCard">
        {legumes.map((legume) => {
          return <LegumeCard key={legume.id} legume={legume} />;
        })}
      </div>
    </div>
  );
}
export default App;
