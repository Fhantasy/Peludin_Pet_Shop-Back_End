import { ResourceOptions } from "adminjs";

export const adressResourceOptions: ResourceOptions = {
  navigation: "Catálogo",
  editProperties: [
    "state",
    "city",
    "district",
    "street",
    "houseNumber",
    "phone",
    "userId",
  ],
  filterProperties: [
    "state",
    "city",
    "district",
    "street",
    "houseNumber",
    "phone",
    "userId",
    "createdAt",
    "updatedAt",
  ],
  listProperties: [
    "state",
    "city",
    "district",
    "street",
    "houseNumber",
    "phone",
    "userId",
  ],
  showProperties: [
    "id",
    "state",
    "city",
    "district",
    "street",
    "houseNumber",
    "phone",
    "userId",
    "createdAt",
    "updatedAt",
  ],
};
