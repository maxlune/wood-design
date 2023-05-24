import mongoose from 'mongoose';

const MaterialSchema = new mongoose.Schema({
  material: {
    type: String,
    required: true,
  },
});

export default mongoose.model('Material', MaterialSchema);
