import mongoose from 'mongoose';

const nameOfCreationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

export default mongoose.model('Creation', nameOfCreationSchema);
