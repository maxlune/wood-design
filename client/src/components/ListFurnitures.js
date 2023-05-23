import React, { useState, useEffect } from "react";

function ListFurnitures() {
  const [furnitures, setFurnitures] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1337/author/list")
      .then((res) => res.json())
      .then((data) => setFurnitures(data));
  }, []);

  return (
    <div>
      <h1>Tous les meubles</h1>
      <ul>
        {furnitures.map((author) => (
          <li key={author._id}>{author.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListFurnitures;
