import { useState } from "react";
import LegumeCard from "../components/LegumeCard";
import SearchBar from "../components/SearchBar";

function HomePage() {
  const [searchText, setSearchText] = useState("");
  return (
    <div>
      <Link to="/formulaire">Formulaire</Link>
      <h1>Mes bios légumes</h1>
      <div className="ctnCard">
        {legumes.map((legume) => {
          return (
            <Link to={`/vegetables/${legume.id}`} key={legume.id}>
              <LegumeCard legume={legume} />
            </Link>
          );
        })}
      </div>
      <SearchBar setSearchText={setSearchText} />
      <LegumeCard searchText={searchText} />
    </div>
  );
}

export default HomePage;
