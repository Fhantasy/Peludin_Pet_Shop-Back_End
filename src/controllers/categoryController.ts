import { Request, Response } from "express";
import { Category } from "../models";
import { getPaginationParams } from "../helpers/productsPagination";
import { categoryService } from "../services/categoryService";

export const categoryController = {
  index: async (req: Request, res: Response) => {
    try {
      const categories = await Category.findAll({
        attributes: ["id", "name"],
      });

      return res.json(categories);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message });
      }
    }
  },

  show: async (req: Request, res: Response) => {
    const [page, perPage] = getPaginationParams(req.query);

    try {
      const products = await categoryService.getProductsWithPagination(
        page,
        perPage,
        req.params.id
      );
      return res.json(products);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message });
      }
    }
  },
};
