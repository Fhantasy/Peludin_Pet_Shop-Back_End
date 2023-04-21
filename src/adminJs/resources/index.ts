import { ResourceWithOptions } from "adminjs";
import { Adress, Category, Product, Purchase, User } from "../../models";
import { categoryResourceOptions } from "./category";
import { userResourceOptions } from "./user";
import { adressResourceOptions } from "./adress";
import { productResourceFeatures, productResourceOptions } from "./product";
import { purchaseResourceOptions } from "./purchase";
import { ProductPurchase } from "../../models/ProductPurchase";
import { productPurchaseResourceOptions } from "./productPurchase";

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
  {
    resource: Purchase,
    options: purchaseResourceOptions,
  },
  {
    resource: ProductPurchase,
    options: productPurchaseResourceOptions,
  },
];
