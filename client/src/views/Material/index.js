import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ButtonAppBar from "../../components/Navbar";

function MaterialDetails() {
  const { id } = useParams();
  const [materialData, setMaterialData] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:1337/api/material/${id}`)
      .then((res) => res.json())
      .then((data) => setMaterialData(data));
  }, [id]);

  if (!materialData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ButtonAppBar />
      <h2>Détails du matériau</h2>
      <p>Nom : {materialData.name}</p>
      <p>{materialData.description}</p>
      <ul>
        {materialData.attributes &&
          materialData.attributes.map((attribute) => (
            <li key={attribute}>{attribute}</li>
          ))}
      </ul>
    </div>
  );
}

export default MaterialDetails;
