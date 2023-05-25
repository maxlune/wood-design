import mongoose from 'mongoose';
import Category from './Category.model.js';
import Material from './Material.model.js';
import Company from './Company.model.js';

const furnitureSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Category,
    required: true,
  },
  materials: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: Material,
      required: true,
    },
  ],
  companies: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: Company,
      required: true,
    },
  ],
});

export default mongoose.model('Furniture', furnitureSchema);
