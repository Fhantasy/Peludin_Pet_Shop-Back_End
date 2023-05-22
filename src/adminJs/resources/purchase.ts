import { ResourceOptions } from "adminjs";

export const purchaseResourceOptions: ResourceOptions = {
  navigation: "Catálogo",
  editProperties: ["userId", "totalPrice"],
  filterProperties: ["userId", "totalPrice", "createdAt", "updatedAt"],
  listProperties: ["id", "userId", "totalPrice"],
  showProperties: ["id", "totalPrice", "userId", "createdAt", "updatedAt"],
};
