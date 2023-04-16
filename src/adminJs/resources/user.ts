import { ResourceOptions } from "adminjs";

export const userResourceOptions: ResourceOptions = {
  navigation: "Catálogo",
  editProperties: ["name", "email", "password", "role"],
  filterProperties: ["name", "role", "createdAt", "updatedAt"],
  listProperties: ["id", "name", "role"],
  showProperties: [
    "id",
    "name",
    "email",
    "password",
    "role",
    "createdAt",
    "updatedAt",
  ],
};
