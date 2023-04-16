import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../database";

export interface Adress {
  id: number;
  state: string;
  city: string;
  district: string;
  street: string;
  houseNumber: number;
  phone: string;
  userId: number;
}

export interface AdressCreationAttributes extends Optional<Adress, "id"> {}
export interface AdressInstance
  extends Model<Adress, AdressCreationAttributes>,
    Adress {}

export const Adress = sequelize.define<AdressInstance, Adress>("Adress", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  state: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  city: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  district: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  street: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  houseNumber: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  phone: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  userId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: { model: "users", key: "id" },
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  },
});
