import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import ReactSelect from "react-select";

const style = {
  mt: 3,
};

const optionsMaterials = [
  { value: "frêne", label: "frêne" },
  { value: "chêne", label: "chêne" },
  { value: "noyer", label: "noyer" },
  { value: "acier", label: "acier" },
  { value: "inox", label: "inox" },
  { value: "aluminum", label: "aluminum" },
  { value: "plastique", label: "plastique" },
];

const optionsCompany = [
  { value: "BBois", label: "BBois" },
  { value: "MetaLo", label: "MetaLo" },
  { value: "pPlastique", label: "pPlastique" },
];

function refreshPage() {
  window.location.reload(true);
}

function FurnitureAddForm() {
  const [furnitureName, setFurnitureName] = useState("");
  const [error, setError] = useState(false);
  const [category, setCategory] = React.useState("");
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [selectedCompany, setSelectedCompany] = useState(null);

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

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
          refreshPage();
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl fullWidth error={error} style={{ marginBottom: "20px" }}>
        <FormGroup>
          {/* Furniture */}
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
      </FormControl>
      {/* Category */}
      <FormControl fullWidth style={{ marginBottom: "20px" }}>
        <InputLabel id="category-select-label">Type de meuble</InputLabel>
        <Select
          labelId="category-select-label"
          id="category-select"
          value={category}
          label="Category"
          onChange={handleChange}
        >
          <MenuItem value={10}>Armoire</MenuItem>
          <MenuItem value={20}>Etagère</MenuItem>
        </Select>
      </FormControl>
      {/* Materials */}
      <div style={{ marginBottom: "20px" }}>
        <ReactSelect
          placeholder={"Choisir un matériau"}
          options={optionsMaterials}
          isMulti
          value={selectedMaterial}
          onChange={setSelectedMaterial}
        />
      </div>
      {/* Company */}
      <ReactSelect
        placeholder={"Choisir une entreprise"}
        options={optionsCompany}
        isMulti
        value={selectedCompany}
        onChange={setSelectedCompany}
      />
      <Button sx={style} type="submit" variant="contained">
        Ajouter un meuble
      </Button>
    </form>
  );
}

export default FurnitureAddForm;
