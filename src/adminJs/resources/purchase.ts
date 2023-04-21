import { ResourceOptions } from "adminjs";

export const purchaseResourceOptions: ResourceOptions = {
  navigation: "Catálogo",
  editProperties: ["userId"],
  filterProperties: ["userId", "createdAt", "updatedAt"],
  listProperties: ["id", "userId"],
  showProperties: ["id", "userId", "createdAt", "updatedAt"],
};
