import FurnitureService from '../services/Furnitures.services.js';

const furnitureService = new FurnitureService();

export const addFurniture = async (req, res) => {
  try {
    const furniture = req.body;
    const newFurniture = await furnitureService.addFurniture(furniture);
    res.status(201).json(newFurniture);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const getAllFurnitures = async (_req, res) => {
  try {
    const furnitures = await furnitureService.getAllFurnitures();
    res.status(200).json(furnitures);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const updateFurniture = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedFurniture = req.body;
    const furniture = await furnitureService.updateFurniture(
      id,
      updatedFurniture
    );
    res.status(200).json(furniture);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const deleteFurniture = async (req, res) => {
  try {
    const id = req.params.id;
    await furnitureService.deleteFurniture(id);
    res.status(204).send();
  } catch (error) {
    res.status(400).send(error.message);
  }
};
