import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../database";

export interface Cart {
  id: number;
  userId: number;
  productId: number;
}

export interface CartCreationAttributes extends Optional<Cart, "id"> {}
export interface CartInstance
  extends Model<Cart, CartCreationAttributes>,
    Cart {}

export const Cart = sequelize.define<CartInstance, Cart>("Cart", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  userId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: { model: "users", key: "id" },
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  },
  productId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: { model: "products", key: "id" },
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  },
});
