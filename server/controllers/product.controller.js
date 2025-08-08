import ProductModel from "../models/product.model.js";

export async function listProductsController(request, response) {
  try {
    const { q, categoryId, status } = request.query;
    const filter = {};
    if (q) filter.name = { $regex: q, $options: "i" };
    if (categoryId) filter.categoryId = categoryId;
    if (status) filter.status = status;

    const products = await ProductModel.find(filter).sort({ createdAt: -1 });
    return response.json({ success: true, error: false, data: products });
  } catch (error) {
    return response.status(500).json({ success: false, error: true, message: error.message || error });
  }
}

export async function getProductController(request, response) {
  try {
    const { id } = request.params;
    const product = await ProductModel.findById(id);
    if (!product) return response.status(404).json({ success: false, error: true, message: "Product not found" });
    return response.json({ success: true, error: false, data: product });
  } catch (error) {
    return response.status(500).json({ success: false, error: true, message: error.message || error });
  }
}

export async function createProductController(request, response) {
  try {
    const { name, slug, description, images, price, salePrice, stock, categoryId, subcategory, status, featured, attributes } = request.body;
    if (!name || !slug || !price) return response.status(400).json({ success: false, error: true, message: "Provide name, slug and price" });
    const exists = await ProductModel.findOne({ slug });
    if (exists) return response.status(400).json({ success: false, error: true, message: "Slug already exists" });
    const product = await ProductModel.create({ name, slug, description, images, price, salePrice, stock, categoryId, subcategory, status, featured, attributes });
    return response.status(201).json({ success: true, error: false, data: product });
  } catch (error) {
    return response.status(500).json({ success: false, error: true, message: error.message || error });
  }
}

export async function updateProductController(request, response) {
  try {
    const { id } = request.params;
    const updates = request.body || {};
    const updated = await ProductModel.findByIdAndUpdate(id, updates, { new: true });
    if (!updated) return response.status(404).json({ success: false, error: true, message: "Product not found" });
    return response.json({ success: true, error: false, data: updated });
  } catch (error) {
    return response.status(500).json({ success: false, error: true, message: error.message || error });
  }
}

export async function deleteProductController(request, response) {
  try {
    const { id } = request.params;
    const deleted = await ProductModel.findByIdAndDelete(id);
    if (!deleted) return response.status(404).json({ success: false, error: true, message: "Product not found" });
    return response.json({ success: true, error: false, message: "Product deleted" });
  } catch (error) {
    return response.status(500).json({ success: false, error: true, message: error.message || error });
  }
}