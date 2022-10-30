import { Router } from "express";
import { createCategoryController } from "../controllers/Categories/createCategory.controller";
import { deleteCategoryController } from "../controllers/Categories/deleteCategory.controller";
import { listCategoriesController } from "../controllers/Categories/listCategories.controller";
import { listCategoryController } from "../controllers/Categories/listCategory.controller";
import { updateCategoryController } from "../controllers/Categories/updateCategory.controller";

const router = Router();

router.get("", listCategoriesController);
router.get("/:id", listCategoryController);
router.post("", createCategoryController);
router.patch("/:id", updateCategoryController);
router.delete("/:id", deleteCategoryController);

export default router;