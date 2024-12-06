import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([]);

  const handlePlantFormSubmit = (newPlant) => {
    setPlants([...plants,newPlant]);
  }

  return (
    <main>
      <NewPlantForm plants={plants} onPlantFormSubmit={handlePlantFormSubmit} />
      <Search />
      <PlantList plants={plants} setPlants={setPlants} />
    </main>
  );
}

export default PlantPage;
