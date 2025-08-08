import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, index: true },
    description: { type: String, default: "" },
    images: { type: [String], default: [] },
    price: { type: Number, required: true },
    salePrice: { type: Number, default: null },
    stock: { type: Number, default: 0 },
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "category" },
    subcategory: { type: String, default: "" },
    status: { type: String, enum: ["ACTIVE", "INACTIVE"], default: "ACTIVE" },
    featured: { type: Boolean, default: false },
    attributes: { type: Map, of: String, default: {} }
  },
  { timestamps: true }
);

const ProductModel = mongoose.model("product", productSchema);
export default ProductModel;