import express, { Router } from "express";
import { categoryController } from "./controllers/categoryController";

const router = express.Router();

router.get("/categories", categoryController.index);
router.get("/categories/:id", categoryController.show);

export { router };
