import { Response } from "express";
import { AuthorizatedRequest } from "../middlewares/auth";
import { purchaseService } from "../services/purchaseService";

export const purchaseController = {
  index: async (req: AuthorizatedRequest, res: Response) => {
    const userId = req.user!.id;
    try {
      const purchases = await purchaseService.findAll(userId);
      return res.json(purchases);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message });
      }
    }
  },
  show: async (req: AuthorizatedRequest, res: Response) => {
    const { id } = req.params;
    try {
      const purchase = await purchaseService.findOne(Number(id));
      res.json(purchase);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message });
      }
      return error;
    }
  },
  create: async (req: AuthorizatedRequest, res: Response) => {
    const userId = req.user!.id;
    const totalPrice = req.body.totalPrice;
    const productList = req.body.products;
    try {
      await purchaseService.create(userId, totalPrice, productList);
      res.status(201).send();
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message });
      }
    }
  },
};
