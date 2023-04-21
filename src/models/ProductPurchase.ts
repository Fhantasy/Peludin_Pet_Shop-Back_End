import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../database";

export interface ProductPurchase {
  id: number;
  quantity: number;
  productId: number;
  purchaseId: number;
}

export interface ProductPurchaseCreationAttributes
  extends Optional<ProductPurchase, "id"> {}
export interface ProductPurchaseInstance
  extends Model<ProductPurchase, ProductPurchaseCreationAttributes>,
    ProductPurchase {}

export const ProductPurchase = sequelize.define<
  ProductPurchaseInstance,
  ProductPurchase
>("ProductPurchase", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  quantity: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  productId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: { model: "products", key: "id" },
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  },
  purchaseId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: { model: "purchases", key: "id" },
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  },
});
