import React from "react";
import "../../App.css";
import ButtonAppBar from "../../components/Navbar";
import FurnitureTable from "../../components/FurnitureTable";

export default function Home() {
  return (
    <div>
      <ButtonAppBar />
      <FurnitureTable />
    </div>
  );
}
