import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, index: true },
    image: { type: String, default: "" },
    parentId: { type: mongoose.Schema.Types.ObjectId, ref: "category", default: null },
    status: { type: String, enum: ["ACTIVE", "INACTIVE"], default: "ACTIVE" }
  },
  { timestamps: true }
);

const CategoryModel = mongoose.model("category", categorySchema);
export default CategoryModel;