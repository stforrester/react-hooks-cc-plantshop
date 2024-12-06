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

  function handleDelete(plantId) {
    fetch(`http://localhost:6001/plants/${plantId}`,{
      method: "DELETE",
    })
    .then(() => {
      setPlants((previousPlants) => previousPlants.filter((plant) => plant.id !== plantId));
    })
    .catch(error => console.error(error))
  }

  const filteredPlants = plants.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()))

  const plantCardsDisplay = filteredPlants.map((plant) => (
      <PlantCard key={plant.id} id={plant.id} src={plant.image} name={plant.name} price={plant.price} handleDelete={handleDelete} />
    ))

  return (
    <ul className="cards">
      {/* render PlantCards components in here */}
      {plantCardsDisplay}
    </ul>
  );
}

export default PlantList;
