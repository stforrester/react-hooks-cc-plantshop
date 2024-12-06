import React, { useState } from "react";

function PlantCard({
  src="https://via.placeholder.com/400",
  name="plant name",
  price="plant price" 
  })
  { 
    const [stock, setStock] = useState(true)

    const handleClick = () => {
      setStock(!stock);
    }

    return (
      <li className="card" data-testid="plant-item">
        <img src={src} alt={"plant name"} />
        <h4>{name}</h4>
        <p>Price: ${price}</p>
        <span>
          {stock ? (
            <button className="primary" onClick={handleClick} >In Stock</button>
          ) : (
            <button>Out of Stock</button>
          )}
          {!stock ? (
            <>
              <div></div>
              <button className="primary" onClick={handleClick} >Re-stock</button>
            </>
          ) : (null)}
        </span>
      </li>
    );
}

export default PlantCard;
