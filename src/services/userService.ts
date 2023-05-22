import { User } from "../models";
import { Adress, AdressCreationAttributes } from "../models/Adress";
import { UserCreationAttributes, UserInstance } from "../models/User";
import bcrypt from "bcrypt";

export const userService = {
  findByEmail: async (email: string) => {
    const user = await User.findOne({
      where: { email },
    });

    return user;
  },

  create: async (attributes: UserCreationAttributes) => {
    const user = await User.create(attributes);

    return user;
  },

  update: async (
    id: number,
    attributes: {
      firstName: string;
      lastName: string;
      birth: Date;
      email: string;
    }
  ) => {
    const userAlreadyExists = await userService.findByEmail(attributes.email);
    if (userAlreadyExists) {
      const currentUser = await User.findByPk(id);
      console.log(currentUser);
      console.log(userAlreadyExists);
      if (userAlreadyExists.id !== currentUser!.id) {
        throw new Error("Este email ja existe!");
      }
    }
    const [affectedRows, updatedUsers] = await User.update(attributes, {
      where: { id },
      returning: true,
    });
    return updatedUsers[0];
  },

  updatePassword: async (id: number, password: string) => {
    const [affectedRows, updatedUsers] = await User.update(
      { password },
      {
        where: { id },
        returning: true,
        individualHooks: true,
      }
    );
    return updatedUsers[0];
  },

  createAdress: async (attributes: AdressCreationAttributes) => {
    const adress = await Adress.create(attributes);
    return adress;
  },

  updateAdress: async (
    id: number,
    attributes: {
      state: string;
      city: string;
      district: string;
      street: string;
      houseNumber: number;
      phone: string;
    }
  ) => {
    const [affectedRows, updatedAdresses] = await Adress.update(attributes, {
      where: { id },
      returning: true,
    });
    return updatedAdresses[0];
  },
};
