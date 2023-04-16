import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../database";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imgUrl: string;
  featured: boolean;
  onSale: boolean;
  categoryId: number;
}

export interface ProductCreationAttributes
  extends Optional<Product, "id" | "imgUrl" | "featured" | "onSale"> {}

export interface ProductInstance
  extends Model<Product, ProductCreationAttributes>,
    Product {}

export const Product = sequelize.define("Product", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  description: {
    allowNull: false,
    type: DataTypes.TEXT,
  },
  price: {
    allowNull: false,
    type: DataTypes.FLOAT,
  },
  imgUrl: {
    type: DataTypes.STRING,
  },
  featured: {
    defaultValue: false,
    type: DataTypes.BOOLEAN,
  },
  onSale: {
    defaultValue: false,
    type: DataTypes.BOOLEAN,
  },
  categoryId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: { model: "categories", key: "id" },
    onUpdate: "CASCADE",
    onDelete: "RESTRICT",
  },
});
