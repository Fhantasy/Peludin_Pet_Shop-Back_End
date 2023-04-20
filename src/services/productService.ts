import { Op } from "sequelize";
import { Product } from "../models";

export const productService = {
  findAllWithPagination: async (
    page: number,
    perPage: number,
    option?: any
  ) => {
    const { rows, count } = await Product.findAndCountAll(option);
    return {
      products: rows,
      page,
      perPage,
      total: count,
    };
  },

  findByName: async (name: string, page: number, perPage: number) => {
    const offset = (page - 1) * perPage;
    const products = await productService.findAllWithPagination(page, perPage, {
      attributes: ["id", "name", "price", ["img_url", "imgUrl"]],
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
      offset,
    });
    return products;
  },
};
