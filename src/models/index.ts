import { Category } from "./Category";
import { Product } from "./Product";
import { User } from "./User";
import { Adress } from "./Adress";
import { Purchase } from "./Purchase";

Purchase.belongsToMany(Product, {
  foreignKey: "purchaseId",
  through: "product_purchases",
  as: "products",
});
Product.belongsToMany(Purchase, {
  foreignKey: "productId",
  through: "product_purchases",
  as: "purchases",
});

Category.hasMany(Product, { as: "products" });
Product.belongsTo(Category);

User.hasOne(Adress);
Adress.belongsTo(User);

User.hasMany(Purchase);
Purchase.belongsTo(User);

export { Category, Product, User, Adress, Purchase };
