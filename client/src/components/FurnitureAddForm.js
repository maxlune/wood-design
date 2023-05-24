import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Button from "@mui/material/Button";

const style = {
  mt: 3,
};

function refreshPage() {
  window.location.reload(true);
}

function FurnitureAddForm() {
  const [furnitureName, setFurnitureName] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (furnitureName === "") {
      setError(true);
    } else {
      fetch("http://localhost:1337/api/furniture/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: furnitureName }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Erreur lors de l'ajout");
          }
          return response.json();
        })
        .then((data) => {
          console.log("Success:", data);
          setFurnitureName("");
          setError(false);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl error={error}>
        <FormGroup>
          <InputLabel htmlFor="furniture-name">Nom du meuble</InputLabel>
          <Input
            id="furniture-name"
            type="text"
            value={furnitureName}
            onChange={(e) => setFurnitureName(e.target.value)}
            aria-describedby="furniture-helper-text"
          />
          <FormHelperText id="furniture-helper-text">
            {error && "Ce champ ne peut pas être vide."}
          </FormHelperText>
        </FormGroup>
        <Button
          sx={style}
          onClick={refreshPage}
          type="submit"
          variant="contained"
        >
          Ajouter un meuble
        </Button>
      </FormControl>
    </form>
  );
}

export default FurnitureAddForm;
