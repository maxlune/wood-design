import Material from '../models/Material.model.js';

class MaterialService {
  async getAllMaterials() {
    const materials = await Material.find({});
    return materials;
  }
}

export default MaterialService;
