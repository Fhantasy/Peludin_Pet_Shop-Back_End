import { Product, Purchase } from "../models";
import { ProductPurchase } from "../models/ProductPurchase";

export const purchaseService = {
  findAll: async (userId: number) => {
    const purchases = await Purchase.findAll({
      where: { userId },
      attributes: [
        "id",
        ["total_price", "totalPrice"],
        ["user_id", "userId"],
        ["created_at", "createdAt"],
      ],
      order: [["created_at", "DESC"]],
    });

    const purchaseWithProducts = purchases.map(async (purchase) => {
      const productsQuantity = await ProductPurchase.findAll({
        where: { purchaseId: purchase.id },
        attributes: ["quantity", ["product_id", "productId"]],
      });

      const productPromise = productsQuantity.map(async (productQuantity) => {
        const product = await Product.findByPk(productQuantity.productId, {
          attributes: [
            "id",
            "name",
            ["on_sale", "onSale"],
            "price",
            ["price_on_sale", "priceOnSale"],
          ],
        });
        const quantity = productQuantity.dataValues.quantity;
        return { quantity, ...product?.dataValues };
      });

      const products = await Promise.all(productPromise);

      return { purchase, products };
    });

    return await Promise.all(purchaseWithProducts);
  },
  findOne: async (id: number) => {
    const purchase = await Purchase.findByPk(id);

    const productsQuantity = await ProductPurchase.findAll({
      where: { purchaseId: purchase?.id },
    });

    const products = await Promise.all(
      productsQuantity.map(async (productQuantity) => {
        const product = await Product.findByPk(productQuantity.productId);
        const quantity = productQuantity.dataValues.quantity;
        return { quantity, ...product?.dataValues };
      })
    );

    return { purchase, products };
  },

  create: async (
    userId: number,
    totalPrice: number,
    productList: [{ productId: number; quantity: number }]
  ) => {
    const purchase = await Purchase.create({ userId, totalPrice });

    const products = await Promise.all(
      productList.map(async (product) => {
        return await ProductPurchase.create({
          productId: product.productId,
          quantity: product.quantity,
          purchaseId: purchase.id,
        });
      })
    );

    return { purchase, products };
  },
};
