import { ResourceWithOptions } from "adminjs";
import { Adress, Category, Product, User } from "../../models";
import { categoryResourceOptions } from "./category";
import { userResourceOptions } from "./user";
import { adressResourceOptions } from "./adress";
import { productResourceFeatures, productResourceOptions } from "./product";

export const adminJsResources: ResourceWithOptions[] = [
  {
    resource: Category,
    options: categoryResourceOptions,
  },
  {
    resource: User,
    options: userResourceOptions,
  },
  {
    resource: Adress,
    options: adressResourceOptions,
  },
  {
    resource: Product,
    options: productResourceOptions,
    features: productResourceFeatures,
  },
];
