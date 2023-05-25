import MaterialService from '../services/Material.service.js';

const materialService = new MaterialService();

export const getAllMaterials = async (_req, res) => {
  try {
    const materials = await materialService.getAllMaterials();
    res.status(200).json(materials);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const getMaterialById = async (req, res) => {
  try {
    const id = req.params.id;
    const material = await materialService.getMaterialById(id);
    res.status(200).json(material);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
