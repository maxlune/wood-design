import express from 'express';
import {
  addFurniture,
  getAllFurnitures,
  updateFurniture,
  deleteFurniture,
} from '../controllers/Furnitures.controller.js';

const router = express.Router();

router.post('/api/furniture', addFurniture);
router.get('/api/furnitures', getAllFurnitures);
router.put('/api/furniture/:id', updateFurniture);
router.delete('/api/furniture/:id', deleteFurniture);

export default router;
