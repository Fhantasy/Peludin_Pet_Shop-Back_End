import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../database";

export interface Purchase {
  id: number;
  totalPrice: number;
  userId: number;
}

export interface PurchaseCreationAttributes extends Optional<Purchase, "id"> {}
export interface PurchaseInstance
  extends Model<Purchase, PurchaseCreationAttributes>,
    Purchase {}

export const Purchase = sequelize.define<PurchaseInstance, Purchase>(
  "Purchase",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    totalPrice: {
      allowNull: false,
      type: DataTypes.FLOAT,
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: "users", key: "id" },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
  }
);
