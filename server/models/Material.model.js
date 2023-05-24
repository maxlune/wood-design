import mongoose from 'mongoose';

const MaterialSchema = new mongoose.Schema(
  {
    material: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

export default mongoose.model('Material', MaterialSchema);
