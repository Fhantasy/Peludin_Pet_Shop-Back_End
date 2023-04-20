import express from "express";
import { categoryController } from "./controllers/categoryController";
import { productController } from "./controllers/productController";
import { authController } from "./controllers/authController";
import { ensureAuth } from "./middlewares/auth";

const router = express.Router();

router.post("/auth/register", authController.register);
router.post("/auth/login", authController.login);

router.get("/categories", categoryController.index);
router.get("/categories/:id", categoryController.show);

router.get("/products/featured", productController.featured);
router.get("/products/onsale", productController.onSale);
router.get("/products/all", productController.index);
router.get("/products/search", productController.search);
router.get("/products/:id", productController.show);

export { router };
