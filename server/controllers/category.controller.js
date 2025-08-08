import CategoryModel from "../models/category.model.js";

export async function listCategoriesController(request, response) {
  try {
    const categories = await CategoryModel.find().sort({ createdAt: -1 });
    return response.json({ success: true, error: false, data: categories });
  } catch (error) {
    return response.status(500).json({ success: false, error: true, message: error.message || error });
  }
}

export async function getCategoryController(request, response) {
  try {
    const { id } = request.params;
    const category = await CategoryModel.findById(id);
    if (!category) return response.status(404).json({ success: false, error: true, message: "Category not found" });
    return response.json({ success: true, error: false, data: category });
  } catch (error) {
    return response.status(500).json({ success: false, error: true, message: error.message || error });
  }
}

export async function createCategoryController(request, response) {
  try {
    const { name, slug, image, parentId, status } = request.body;
    if (!name || !slug) return response.status(400).json({ success: false, error: true, message: "Provide name and slug" });
    const exists = await CategoryModel.findOne({ slug });
    if (exists) return response.status(400).json({ success: false, error: true, message: "Slug already exists" });
    const category = await CategoryModel.create({ name, slug, image, parentId: parentId || null, status });
    return response.status(201).json({ success: true, error: false, data: category });
  } catch (error) {
    return response.status(500).json({ success: false, error: true, message: error.message || error });
  }
}

export async function updateCategoryController(request, response) {
  try {
    const { id } = request.params;
    const updates = request.body || {};
    const updated = await CategoryModel.findByIdAndUpdate(id, updates, { new: true });
    if (!updated) return response.status(404).json({ success: false, error: true, message: "Category not found" });
    return response.json({ success: true, error: false, data: updated });
  } catch (error) {
    return response.status(500).json({ success: false, error: true, message: error.message || error });
  }
}

export async function deleteCategoryController(request, response) {
  try {
    const { id } = request.params;
    const deleted = await CategoryModel.findByIdAndDelete(id);
    if (!deleted) return response.status(404).json({ success: false, error: true, message: "Category not found" });
    return response.json({ success: true, error: false, message: "Category deleted" });
  } catch (error) {
    return response.status(500).json({ success: false, error: true, message: error.message || error });
  }
}