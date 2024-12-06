import React, { useState, useEffect } from "react";
import PlantCard from "./PlantCard";

function PlantList() {

  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((resp) => resp.json())
      .then((data) => {
        setPlants(data)
      })
      .catch(error => console.error(error))
  })

  const plantCardsDisplay = plants.map((plant) => (
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
