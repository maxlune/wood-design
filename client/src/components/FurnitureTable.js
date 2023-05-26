import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AddFurnitureModal from "../components/AddFurnitureModal";
import { Button } from "@mui/material";

function FurnituresList() {
  const [furnitures, setFurnitures] = useState([]);
  const [selectedFurniture, setSelectedFurniture] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetch("http://localhost:1337/api/furnitures")
      .then((res) => res.json())
      .then((data) => setFurnitures(data));
  }, []);

  const handleUpdate = (furnitureId, updatedData) => {
    setFurnitures((prevFurnitures) =>
      prevFurnitures.map((furniture) =>
        furniture._id === furnitureId
          ? { ...furniture, ...updatedData }
          : furniture
      )
    );
  };

  const handleSelectFurniture = (furniture) => {
    setSelectedFurniture(furniture);
    setOpen(true);
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:1337/api/furniture/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Erreur lors de la suppression");
        }
        setFurnitures(furnitures.filter((furniture) => furniture._id !== id));
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <h1>Tous les meubles</h1>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nom du meuble</TableCell>
              <TableCell>Type de meuble</TableCell>
              <TableCell>Materiaux</TableCell>
              <TableCell>Entreprise</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {furnitures.map((furniture) => (
              <TableRow key={furniture._id}>
                <TableCell component="th" scope="row">
                  {furniture.name}
                </TableCell>
                <TableCell>{furniture.category.name}</TableCell>
                {/* <TableCell>
                  {furniture.materials
                    .map((material) => material.name)
                    .join(", ")}
                </TableCell> */}
                <TableCell>
                  {furniture.materials.map((material) => (
                    <Link
                      to={`/material/${material._id}`}
                      key={material._id}
                      style={{ marginRight: "5px" }}
                    >
                      {material.name}
                    </Link>
                  ))}
                </TableCell>
                <TableCell>
                  {furniture.companies
                    .map((companie) => companie.name)
                    .join(", ")}
                </TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    onClick={() => handleDelete(furniture._id)}
                    color="error"
                  >
                    Supprimer
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleSelectFurniture(furniture)}
                  >
                    Modifier
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {selectedFurniture && (
        <AddFurnitureModal
          furniture={selectedFurniture}
          onUpdate={handleUpdate}
          open={open}
          onClose={() => setOpen(false)}
        />
      )}
    </div>
  );
}

export default FurnituresList;
