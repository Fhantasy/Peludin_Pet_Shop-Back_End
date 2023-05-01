import { Request, Response } from "express";
import { Product } from "../models";
import { productService } from "../services/productService";
import { getPaginationParams } from "../helpers/productsPagination";

export const productController = {
  //GET /products/all
  index: async (req: Request, res: Response) => {
    try {
      const products = await Product.findAll();
      res.json(products);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message });
      }
    }
  },

  //GET /products/:id
  show: async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const product = await Product.findByPk(id);
      res.json(product);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message });
      }
    }
  },

  //GET /products/featured
  featured: async (req: Request, res: Response) => {
    try {
      const featuredProducts = await Product.findAll({
        where: { featured: true },
      });
      featuredProducts.sort(() => 0.5 - Math.random());
      res.json(featuredProducts.splice(0, 5));
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message });
      }
    }
  },

  //GET /products/search
  search: async (req: Request, res: Response) => {
    const { name } = req.query;
    const [page, perPage] = getPaginationParams(req.query);
    try {
      if (typeof name !== "string")
        throw new Error("name must be of type string");
      const products = await productService.findByName(name);

      res.json(products);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message });
      }
    }
  },
};
