import express from 'express';
import {
  addFurniture,
  getAllFurnitures,
  updateFurniture,
  deleteFurniture,
} from '../controllers/Furnitures.controller.js';
import { getAllCategories } from '../controllers/Category.controller.js';
import {
  getAllMaterials,
  getMaterialById,
} from '../controllers/Material.controller.js';
import { getAllCompanies } from '../controllers/Company.controller.js';

const router = express.Router();

router.post('/api/furniture', addFurniture);
router.get('/api/furnitures', getAllFurnitures);
router.put('/api/furniture/:id', updateFurniture);
router.delete('/api/furniture/:id', deleteFurniture);

router.get('/api/categories', getAllCategories);
router.get('/api/materials', getAllMaterials);
router.get('/api/companies', getAllCompanies);

router.get('/api/material/:id', getMaterialById);

export default router;
