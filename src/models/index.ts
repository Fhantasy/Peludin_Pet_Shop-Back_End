import { Category } from "./Category";
import { Product } from "./Product";
import { User } from "./User";
import { Adress } from "./Adress";

User.belongsToMany(Product, {
  foreignKey: "userId",
  through: "cart",
  as: "products",
});
Product.belongsToMany(User, {
  foreignKey: "productId",
  through: "cart",
  as: "users",
});

Category.hasMany(Product);
Product.belongsTo(Category);

User.hasOne(Adress);
Adress.belongsTo(User);

export { Category, Product, User, Adress };
