import express, { Router } from "express";
import { categoryController } from "./controllers/categoryController";
import { productController } from "./controllers/productController";

const router = express.Router();

router.get("/categories", categoryController.index);
router.get("/categories/:id", categoryController.show);

router.get("/products/featured", productController.featured);
router.get("/products/onsale", productController.onSale);
router.get("/products/all", productController.index);
router.get("/products/:id", productController.show);

export { router };
