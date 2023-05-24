import mongoose from 'mongoose';

const furnitureSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

export default mongoose.model('Furniture', furnitureSchema);
