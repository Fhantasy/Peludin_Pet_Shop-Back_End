import { Category } from "../models";

export const categoryService = {
  getProductsWithPagination: async (
    page: number,
    perPage: number,
    params: any
  ) => {
    const id = params;

    const categoryWithProducts = await Category.findByPk(id, {
      attributes: ["id", "name"],
      include: {
        association: "products",
      },
    });

    const offset = (page - 1) * perPage;

    if (categoryWithProducts) {
      const { products } = categoryWithProducts;

      return {
        category: categoryWithProducts.name,
        products: products?.slice(offset, offset + perPage),
        page: page,
        perPage: perPage,
        total: products?.length,
      };
    }
  },
};
