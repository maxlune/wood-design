import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function FurnituresList() {
  const [furnitures, setFurnitures] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1337/api/furnitures")
      .then((res) => res.json())
      .then((data) => setFurnitures(data));
  }, []);

  return (
    <div>
      <h1>Tous les meubles</h1>
      <ul>
        {furnitures.map((furniture) => (
          <li key={furniture._id}>
            <Link to={`/${furniture.materialId}`}>{furniture.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FurnituresList;
