import Category from '../models/Category.model.js';

class CategoryService {
  async getAllCategories() {
    const categories = await Category.find({});
    return categories;
  }
}

export default CategoryService;
