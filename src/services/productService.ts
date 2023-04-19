import { Op } from "sequelize";
import { Product } from "../models";

export const productService = {
  findByName: async (name: string) => {
    const products = await Product.findAll({
      attributes: ["id", "name", "price", ["img_url", "imgUrl"]],
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
    });
    return products;
  },
};
