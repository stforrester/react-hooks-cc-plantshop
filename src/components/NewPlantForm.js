import React, { useState } from "react";

function NewPlantForm({ plants, onPlantFormSubmit }) {
  
  const [plantImg, setPlantImg] = useState("");
  const [plantName, setPlantName] = useState("");
  const [plantPrice, setPlantPrice] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPlant = { id: plants.length+1, name: plantName, image: plantImg, price: plantPrice };
    onPlantFormSubmit(newPlant);
    setPlantName("");
    setPlantImg("");
    setPlantPrice("Price");
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit} >
        <input
          type="text"
          name="name"
          placeholder="Plant name"
          value={plantName}
          onChange={(e) => setPlantName(e.target.value)}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"          
          value={plantImg}
          onChange={(e) => setPlantImg(e.target.value)}
          />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          value={plantPrice}
          onChange={(e) => setPlantPrice(e.target.value)}
          />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
