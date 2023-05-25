import Compagny from '../models/Compagny.model.js';

class CompagnyService {
  async addCompagny(furniture) {
    // Ajouter
    const newCompagny = await Compagny.create(furniture);
    return newCompagny;
  }

  async getAllCompagnies() {
    // Récupérer tous les meubles
    const furnitures = await Compagny.find({})
      .populate('category')
      .populate('materials')
      .populate('companies');
    return furnitures;
  }

  async updateCompagny(id, updatedFurniture) {
    // Mettre à jour le meuble
    const furniture = await Compagny.findByIdAndUpdate(id, updatedFurniture, {
      new: true,
    }).populate('category materials companies');
    return furniture;
  }

  async deleteCompagny(id) {
    // Supprimer le meuble
    await Compagny.findByIdAndDelete(id);
  }
}

export default CompagnyService;
