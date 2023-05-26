import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import img from "../assets/picture/logo_maison.png";
import AddFurnitureModal from "../components/AddFurnitureModal";

const style = {
  width: 100,
};

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <img style={style} src={img} alt="logo_maison" />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Wood Design
          </Typography>
          <AddFurnitureModal />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
