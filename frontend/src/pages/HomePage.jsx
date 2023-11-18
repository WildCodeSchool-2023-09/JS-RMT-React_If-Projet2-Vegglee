import { useLoaderData, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import LegumeCard from "../components/LegumeCard";
import SearchBar from "../components/SearchBar";
import "./button.css";

function HomePage() {
  const [searchText, setSearchText] = useState("");
  const legumes = useLoaderData();
  const [categories, setCategories] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/vegetables`)
      .then((res) => {
        const uniqueCategories = Array.from(
          new Set(res.data.map((vegetable) => vegetable.categorie))
        );
        setCategories(uniqueCategories);
      });
  }, []);

  const updateFilter = (category) => {
    setFilter((prevFilter) => (prevFilter === category ? "" : category));
  };

  return (
    <div>
      <h1>Mes bios légumes</h1>
      <div>
        <button
          type="button"
          className="buttonCategorie"
          onClick={() => updateFilter("")}
        >
          Tous
        </button>
        {categories.map((categorie) => (
          <button
            type="button"
            className="buttonCategorie"
            key={categorie}
            onClick={() => updateFilter(categorie)}
          >
            {categorie}
          </button>
        ))}
      </div>
      <div className="ctnCard">
        {legumes &&
          legumes
            .filter(
              (legume) =>
                filter === "" ||
                legume.categorie.toString() === filter.toString()
            )
            .map((legume) => (
              <Link to={`/vegetables/${legume.id}`} key={legume.id}>
                <LegumeCard legume={legume} />
              </Link>
            ))}
      </div>
      <SearchBar setSearchText={setSearchText} />
      <LegumeCard searchText={searchText} />
    </div>
  );
}

export default HomePage;
