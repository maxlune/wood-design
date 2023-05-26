import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import img from "../assets/picture/logo_maison.png";
import AddFurnitureModal from "../components/AddFurnitureModal";
import { Link } from "react-router-dom";

const style = {
  width: 100,
};

const styleButton = {
  color: "white",
};

export default function ButtonAppBar() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/" style={{ textDecoration: "none" }}>
            <img style={style} src={img} alt="logo_maison" />
          </Link>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Wood Design
            </Link>
          </Typography>
          <Button style={styleButton} onClick={handleOpen}>
            Ajouter un meuble
          </Button>
          <AddFurnitureModal open={open} onClose={handleClose} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
