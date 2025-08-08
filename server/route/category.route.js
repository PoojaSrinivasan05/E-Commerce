import { Router } from "express";
import { listCategoriesController, getCategoryController, createCategoryController, updateCategoryController, deleteCategoryController } from "../controllers/category.controller.js";

const categoryRouter = Router();

categoryRouter.get("/", listCategoriesController);
categoryRouter.get("/:id", getCategoryController);
categoryRouter.post("/", createCategoryController);
categoryRouter.put("/:id", updateCategoryController);
categoryRouter.delete("/:id", deleteCategoryController);

export default categoryRouter;