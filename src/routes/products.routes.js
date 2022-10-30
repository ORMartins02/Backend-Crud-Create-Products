import { Router } from "express";
import { createProductsController } from "../controllers/Products/createProduct.controller";
import { deleteProductController } from "../controllers/Products/deleteProduct.controller";
import { listProductController } from "../controllers/Products/listProduct.controller";
import { listProductsController } from "../controllers/Products/listProducts.controller";
import { listProductsCategoryController } from "../controllers/Products/listProductsCategory.controller";
import { updateProductController } from "../controllers/Products/updateProduct.controller";
import { validateSchemaMiddleware } from "../middlewares/validateSchema.middleware";
import { createProductsSchema } from "../schemas/createProducts.schemas";
import { updateProductSchema } from "../schemas/updateProduct.schemas"

const router = Router();

router.get("", listProductsController);
router.get("/:id", listProductController);
router.post("", validateSchemaMiddleware(createProductsSchema), createProductsController);
router.patch("/:id", validateSchemaMiddleware(updateProductSchema), updateProductController);
router.delete("/:id", deleteProductController);
router.get("/category/:category_id", listProductsCategoryController);

export default router;