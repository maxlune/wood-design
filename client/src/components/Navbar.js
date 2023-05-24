import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import img from "../assets/picture/img.png";
import AddFurnitureModal from "../components/AddFurnitureModal";

const style = {
  width: 50,
};

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <img style={style} src={img} alt="Logo" />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Wood Design
          </Typography>
          <AddFurnitureModal />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
