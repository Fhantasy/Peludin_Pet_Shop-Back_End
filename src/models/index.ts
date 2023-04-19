import { Category } from "./Category";
import { Product } from "./Product";
import { User } from "./User";
import { Adress } from "./Adress";
import { Cart } from "./Cart";

User.belongsToMany(Product, {
  foreignKey: "userId",
  through: "carts",
  as: "products",
});
Product.belongsToMany(User, {
  foreignKey: "productId",
  through: "carts",
  as: "users",
});

Category.hasMany(Product, { as: "products" });
Product.belongsTo(Category);

User.hasOne(Adress);
Adress.belongsTo(User);

export { Category, Product, User, Adress, Cart };
