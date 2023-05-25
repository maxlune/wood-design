import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import FurnitureAddForm from "./FurnitureAddForm";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  width: 400,
};

export default function AddFurnitureModal({
  furniture,
  onUpdate,
  open,
  onClose,
}) {
  const isUpdate = !!furniture;

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };
  const handleSubmit = (data) => {
    if (isUpdate && onUpdate) {
      onUpdate(furniture._id, data);
    }
    handleClose();
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <FurnitureAddForm
            initialData={furniture}
            onSubmit={handleSubmit}
            isUpdate={isUpdate}
          />
        </Box>
      </Modal>
    </div>
  );
}
