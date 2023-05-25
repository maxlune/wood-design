import CategoryService from '../services/Category.service.js';

const categoryService = new CategoryService();

export const getAllCategories = async (_req, res) => {
  try {
    const categories = await categoryService.getAllCategories();
    res.status(200).json(categories);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
