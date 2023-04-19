import AdminJS, { ComponentLoader, PageHandler } from "adminjs";
import { Category, Product, User } from "../models";
import { Components } from "./components";

export const dashBoardOptions: {
  handler?: PageHandler;
  component?: string;
} = {
  component: Components.Dashboard,

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
