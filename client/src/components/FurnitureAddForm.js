import React, { useEffect, useState } from "react";
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

function refreshPage() {
  window.location.reload(true);
}

function FurnitureAddForm({ onSubmit, initialData, isUpdate }) {
  const [furnitureName, setFurnitureName] = useState("");
  const [error, setError] = useState(false);

  const [initialMaterials, setInitialMaterials] = useState(null);
  const [initialCompanies, setInitialCompanies] = useState(null);

  const [category, setCategory] = React.useState("");
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [selectedCompany, setSelectedCompany] = useState(null);

  const [categories, setCategories] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1337/api/categories")
      .then((res) => res.json())
      .then((data) =>
        setCategories(
          data.map((category) => ({
            value: category._id,
            label: category.name,
          }))
        )
      );

    fetch("http://localhost:1337/api/materials")
      .then((res) => res.json())
      .then((data) =>
        setMaterials(
          data.map((material) => ({
            value: material._id,
            label: material.name,
          }))
        )
      );

    fetch("http://localhost:1337/api/companies")
      .then((res) => res.json())
      .then((data) =>
        setCompanies(
          data.map((company) => ({
            value: company._id,
            label: company.name,
          }))
        )
      );

    if (initialData) {
      setFurnitureName(initialData.name);
      setCategory(initialData.category._id);
      setInitialMaterials(
        initialData.materials.map((material) => ({
          value: material._id,
          label: material.name,
        }))
      );
      setInitialCompanies(
        initialData.companies.map((company) => ({
          value: company._id,
          label: company.name,
        }))
      );
      setSelectedMaterial(
        initialData.materials.map((material) => ({
          value: material._id,
          label: material.name,
        }))
      );
      setSelectedCompany(
        initialData.companies.map((company) => ({
          value: company._id,
          label: company.name,
        }))
      );
    }
  }, [initialData]);

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (furnitureName === "") {
      setError(true);
    } else {
      const materials = selectedMaterial
        ? selectedMaterial.map((item) => item.value)
        : [];
      const companies = selectedCompany
        ? selectedCompany.map((item) => item.value)
        : [];

      onSubmit({
        name: furnitureName,
        category: category,
        materials: materials,
        companies: companies,
      });

      const url = isUpdate
        ? `http://localhost:1337/api/furniture/${initialData._id}`
        : "http://localhost:1337/api/furniture/";
      const method = isUpdate ? "PUT" : "POST";

      fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: furnitureName,
          category: category,
          materials: materials,
          companies: companies,
        }),
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
          {categories.map((category) => (
            <MenuItem key={category.value} value={category.value}>
              {category.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {/* Materials */}
      <div style={{ marginBottom: "20px" }}>
        <ReactSelect
          placeholder={"Choisir un matériau"}
          options={materials}
          isMulti
          value={selectedMaterial || initialMaterials}
          onChange={setSelectedMaterial}
        />
      </div>
      {/* Company */}
      <ReactSelect
        placeholder={"Choisir une entreprise"}
        options={companies}
        isMulti
        value={selectedCompany || initialCompanies}
        onChange={setSelectedCompany}
      />
      <Button sx={style} type="submit" variant="contained">
        {/* Ajouter un meuble */}
        {isUpdate ? "Mettre à jour le meuble" : "Ajouter un mauble"}
      </Button>
    </form>
  );
}

export default FurnitureAddForm;
