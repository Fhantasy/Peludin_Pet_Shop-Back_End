import { Request, Response } from "express";
import { Product } from "../models";

export const productController = {
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
  onSale: async (req: Request, res: Response) => {
    try {
      const onSaleProducts = await Product.findAll({
        where: { on_sale: true },
      });
      res.json(onSaleProducts);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message });
      }
    }
  },
};
