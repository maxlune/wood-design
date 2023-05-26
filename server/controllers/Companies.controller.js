import FurnitureService from '../services/Furnitures.services.js';

const furnitureService = new FurnitureService();

export const addCompany = async (req, res) => {
  try {
    const furniture = req.body;
    const newFurniture = await furnitureService.addCompany(furniture);
    res.status(201).json(newFurniture);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const getAllCompany = async (_req, res) => {
  try {
    const furnitures = await furnitureService.getAllCompany();
    res.status(200).json(furnitures);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const updateCompany = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedFurniture = req.body;
    const furniture = await furnitureService.updateCompany(
      id,
      updatedFurniture
    );
    res.status(200).json(furniture);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const deleteCompany = async (req, res) => {
  try {
    const id = req.params.id;
    await furnitureService.deleteCompany(id);
    res.status(204).send();
  } catch (error) {
    res.status(400).send(error.message);
  }
};
