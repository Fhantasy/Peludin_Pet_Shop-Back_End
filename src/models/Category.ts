import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../database";
import { ProductInstance } from "./Product";

export interface Category {
  id: number;
  name: string;
}

export interface CategoryCreationAttributes extends Optional<Category, "id"> {}
export interface CategoryInstance
  extends Model<Category, CategoryCreationAttributes>,
    Category {
  products?: ProductInstance[];
}

export const Category = sequelize.define<CategoryInstance, Category>(
  "Category",
  {
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
  }
);
