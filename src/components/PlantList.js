import React, { useState, useEffect } from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, setPlants, searchQuery }) {

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((resp) => resp.json())
      .then((data) => {
        setPlants(data)
      })
      .catch(error => console.error(error))
  }, [setPlants])

  const filteredPlants = plants.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()))

  const plantCardsDisplay = filteredPlants.map((plant) => (
      <PlantCard key={plant.id} src={plant.image} name={plant.name} price={plant.price} />
    ))

  return (
    <ul className="cards">
      {/* render PlantCards components in here */}
      {plantCardsDisplay}
    </ul>
  );
}

export default PlantList;
