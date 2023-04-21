import { ResourceOptions } from "adminjs";

export const productPurchaseResourceOptions: ResourceOptions = {
  navigation: "Catálogo",
  editProperties: ["productId", "purchaseId", "quantity"],
  filterProperties: ["productId", "purchaseId", "createdAt", "updatedAt"],
  listProperties: ["id", "purchaseId", "productId", "quantity"],
  showProperties: [
    "id",
    "purchaseId",
    "productId",
    "quantity",
    "createdAt",
    "updatedAt",
  ],
};
