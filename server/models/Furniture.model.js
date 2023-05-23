import mongoose from 'mongoose';

const FurnitureSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

const collectionName = 'furnitures';
export default mongoose.model('Creation', FurnitureSchema, collectionName);
