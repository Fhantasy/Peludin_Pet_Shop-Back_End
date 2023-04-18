import AdminJS, { PageHandler } from "adminjs/types/src";
import { Category, Product, User } from "../models";

export const dashBoardOptions: {
  handler?: PageHandler;
  component?: string;
} = {
  component: AdminJS.bundle("./components/Dashboard"),
  handler: async (req, res, context) => {
    const users = await User.count({ where: { role: "user" } });
    const products = await Product.count();
    const categories = await Category.count();

    res.json({
      Usuários: users,
      Produtos: products,
      Categorias: categories,
    });
  },
};
