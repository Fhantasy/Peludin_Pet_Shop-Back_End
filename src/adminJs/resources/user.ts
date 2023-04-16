import { ResourceOptions } from "adminjs";

export const userResourceOptions: ResourceOptions = {
  navigation: "Administração",
  properties: {
    birth: {
      type: "date",
    },
    role: {
      availableValues: [
        { value: "admin", label: "Administrador" },
        { value: "user", label: "Usuário Padrão" },
      ],
    },
  },
  editProperties: [
    "firstName",
    "lastName",
    "birth",
    "email",
    "password",
    "role",
  ],
  filterProperties: [
    "firstName",
    "lastName",
    "birth",
    "role",
    "createdAt",
    "updatedAt",
  ],
  listProperties: ["id", "firstName", "lastName", "birth", "role"],
  showProperties: [
    "id",
    "firstName",
    "lastName",
    "birth",
    "email",
    "password",
    "role",
    "createdAt",
    "updatedAt",
  ],
};
