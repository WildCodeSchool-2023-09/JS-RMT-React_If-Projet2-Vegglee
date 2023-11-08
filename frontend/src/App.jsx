import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import SearchBar from "./components/searchBar";

function App() {
  const legumes = useLoaderData();
  const [searchText, setSearchText] = useState("");

  const filteredLegumes = legumes.filter((legume) => {
    return legume.name.toLowerCase().includes(searchText.toLowerCase());
  });

  return (
    <div>
      <div className="searchContainer">
        <SearchBar searchText={searchText} setSearchText={setSearchText} />{" "}
        <h1>Mes bios légumes</h1>
      </div>

      <div className="cardCtn">
        {filteredLegumes.map((legume) => {
          return (
            <div className="legumesCard">
              <img className="imgCard" src={legume.image} alt={legume.name} />
              <h2 className="titleOnImage">{legume.name}</h2>
              <p>prix: {legume.price}0 €</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default App;
