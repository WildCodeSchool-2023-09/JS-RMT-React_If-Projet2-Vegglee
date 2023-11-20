import { useState, useEffect } from "react";
import axios from "axios";
import LegumeCard from "../components/LegumeCard";
import SearchBar from "../components/SearchBar";

function HomePage() {
  const [searchText, setSearchText] = useState("");
  const [categories, setCategories] = useState([]);
  const [filter, setFilter] = useState(0);

  const fetchCategories = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/categories`)
      .then((res) => setCategories(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const updateFilter = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div>
      <h1>Mes bios légumes</h1>
      <select name="" id="" onChange={(event) => updateFilter(event)}>
        <option value={0}>tous</option>
        {categories.map((categorie) => (
          <option key={categorie.id} value={categorie.id}>
            {categorie.nom}
          </option>
        ))}
      </select>
      <SearchBar setSearchText={setSearchText} />
      <LegumeCard
        searchText={searchText}
        categories={categories}
        fetchCategories={fetchCategories}
        filter={filter}
      />
    </div>
  );
}

export default HomePage;
