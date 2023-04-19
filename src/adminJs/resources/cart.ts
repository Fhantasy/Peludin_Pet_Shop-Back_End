import { ResourceOptions } from "adminjs";

export const cartResourceOptions: ResourceOptions = {
  navigation: "Catálogo",
  editProperties: ["productId", "userId"],
  filterProperties: ["productId", "userId", "createdAt", "updatedAt"],
  listProperties: ["id", "productId", "userId"],
  showProperties: ["id", "productId", "userId", "createdAt", "updatedAt"],
};
