import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1337/author/list")
      .then((res) => res.json())
      .then((data) => setAuthors(data));
  }, []);

  return (
    <div className="App">
      <h1>Wood Design</h1>
      {authors.map((author, index) => (
        <p key={index}>{author.name}</p>
      ))}
    </div>
  );
}

export default App;
