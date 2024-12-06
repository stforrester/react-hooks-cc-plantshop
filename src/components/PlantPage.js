import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handlePlantFormSubmit = (newPlant) => {
    setPlants([...plants,newPlant]);
  }

  const handleSearch = event => {
    setSearchQuery(event.target.value);
  }

  return (
    <main>
      <NewPlantForm plants={plants} onPlantFormSubmit={handlePlantFormSubmit} />
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} onSearch={handleSearch} />
      <PlantList plants={plants} setPlants={setPlants} searchQuery={searchQuery} />
    </main>
  );
}

export default PlantPage;
