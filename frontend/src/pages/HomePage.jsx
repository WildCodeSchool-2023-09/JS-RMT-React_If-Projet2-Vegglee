import React, { useEffect, useState } from "react";
import LegumeCard from "../components/LegumeCard";

async function fetchData() {
  const response = await fetch(" http://localhost:3310/api/vegetables");
  const data = await response.json();
  return data;
}

function HomePage() {
  const [legumes, setLegumes] = useState([]);

  useEffect(() => {
    const fetchLegumes = async () => {
      try {
        const data = await fetchData();
        setLegumes(data);
      } catch (error) {
        console.error("Erreur lors du chargement des légumes", error);
      }
    };

    fetchLegumes();
  }, []);

  return (
    <div>
      <h1>Mes bios légumes</h1>
      <div className="ctnCard">
        {legumes.map((legume) => {
          return <LegumeCard key={legume.id} legume={legume} />;
        })}
      </div>
    </div>
  );
}

export default HomePage;
