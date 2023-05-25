import Material from '../models/Material.model.js';

class MaterialService {
  async getAllMaterials() {
    const materials = await Material.find({});
    return materials;
  }

  async getMaterialById(id) {
    const material = await Material.findById(id);
    return material;
  }
}

export default MaterialService;
