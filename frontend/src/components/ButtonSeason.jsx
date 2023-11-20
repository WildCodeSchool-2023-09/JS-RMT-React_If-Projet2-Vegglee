import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import LegumeCard from "./LegumeCard";

function ButtonSeason() {
  const legumes = useLoaderData();
  const [categories, setCategories] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3310/categories")
      .then((res) => setCategories(res.data));
  }, []);

  const updateFilter = (event) => {
    setFilter(event.target.value);
  };

  return (
    <>
      <select id="" onChange={(event) => updateFilter(event)}>
        <option value="">Tous</option>
        {categories.map((categorie) => (
          <option key={categorie.id} value={categorie.id}>
            {categorie.nom}
          </option>
        ))}
      </select>
      <ul id="">
        {legumes
          .filter((legume) => legume.categorie_id === filter || filter === "")
          .map((legume) => (
            <li key={legume.id}>
              <LegumeCard data={legume} />
            </li>
          ))}
        {/* end of block */}
      </ul>
    </>
  );
}
export default ButtonSeason;
