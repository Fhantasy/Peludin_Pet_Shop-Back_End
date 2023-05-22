import { Response } from "express";
import { AuthorizatedRequest } from "../middlewares/auth";
import { userService } from "../services/userService";
import { error } from "console";
import { Adress } from "../models";

export const userController = {
  show: async (req: AuthorizatedRequest, res: Response) => {
    const currentUser = req.user!;
    try {
      res.json(currentUser);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message });
      }
    }
  },

  update: async (req: AuthorizatedRequest, res: Response) => {
    const { id } = req.user!;
    const { firstName, lastName, birth, email } = req.body;
    try {
      const updatedUser = await userService.update(id, {
        firstName,
        lastName,
        birth,
        email,
      });
      return res.json(updatedUser);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message });
      }
    }
  },

  updatePassword: async (req: AuthorizatedRequest, res: Response) => {
    const user = req.user!;
    const { currentPassword, newPassword } = req.body;
    user.checkPassword(currentPassword, async (error, isSame) => {
      try {
        if (error) throw error;
        if (!isSame) throw new Error("Senha atual incorreta!");

        await userService.updatePassword(user.id, newPassword);
        return res.status(204).send();
      } catch (error) {
        if (error instanceof Error) {
          return res.status(400).json({ message: error.message });
        }
      }
    });
  },

  createAdress: async (req: AuthorizatedRequest, res: Response) => {
    const userId = req.user!.id;
    const { state, city, district, street, houseNumber, phone } = req.body;
    try {
      await userService.createAdress({
        state,
        city,
        district,
        street,
        houseNumber,
        phone,
        userId,
      });
      return res.status(201).send();
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message });
      }
    }
  },

  showAdress: async (req: AuthorizatedRequest, res: Response) => {
    const userId = req.user!.id;
    try {
      const adress = await Adress.findOne({ where: { userId } });

      if (!adress) throw new Error("Nenhum endereço cadastrado!");

      return res.json(adress);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(404).json({ message: error.message });
      }
    }
  },

  updateAdress: async (req: AuthorizatedRequest, res: Response) => {
    const userId = req.user!.id;
    const { state, city, district, street, houseNumber, phone } = req.body;

    try {
      const adress = await Adress.findOne({ where: { userId } });

      if (!adress) throw new Error("Endereço não encontrado!");

      await userService.updateAdress(adress.id, {
        state,
        city,
        district,
        street,
        houseNumber,
        phone,
      });
      return res.status(204).send();
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message });
      }
    }
  },
};
