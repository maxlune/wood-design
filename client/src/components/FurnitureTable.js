import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AddFurnitureModal from "../components/AddFurnitureModal";

function FurnituresList() {
  const [furnitures, setFurnitures] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1337/api/furnitures")
      .then((res) => res.json())
      .then((data) => setFurnitures(data));
  }, []);

  return (
    <TableContainer component={Paper}>
      <h1>Tous les meubles</h1>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nom du meuble</TableCell>
            <TableCell>ID</TableCell>
            <TableCell>Categorie</TableCell>
            <TableCell>Materieux</TableCell>
            <TableCell>Entreprise</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {furnitures.map((furniture) => (
            <TableRow key={furniture._id}>
              <TableCell component="th" scope="row">
                {furniture.name}
              </TableCell>
              <TableCell>{furniture._id}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default FurnituresList;
