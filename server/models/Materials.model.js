import mongoose from 'mongoose';

const MaterialsSchema = new mongoose.Schema({
  materials: {
    type: String,
    required: true,
  },
});

export default mongoose.model('Material', MaterialsSchema);
