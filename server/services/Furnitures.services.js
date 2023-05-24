import Furniture from '../models/Furniture.model.js';

class FurnitureService {
  async addFurniture(furniture) {
    // Ajouter
    const newFurniture = await Furniture.create(furniture);
    return newFurniture;
  }

  async getAllFurnitures() {
    // Récupérer tous les meubles
    const furnitures = await Furniture.find({});
    return furnitures;
  }

  async updateFurniture(id, updatedFurniture) {
    // Mettre à jour le meuble
    const furniture = await Furniture.findByIdAndUpdate(id, updatedFurniture, {
      new: true,
    });
    return furniture;
  }

  async deleteFurniture(id) {
    // Supprimer le meuble
    await Furniture.findByIdAndDelete(id);
  }
}

export default FurnitureService;
