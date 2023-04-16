import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../database";

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: "admin" | "user";
}

export interface UserCreationAttributes extends Optional<User, "id"> {}
export interface UserInstance
  extends Model<User, UserCreationAttributes>,
    User {}

export const User = sequelize.define<UserInstance, User>("User", {
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
  email: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  role: {
    allowNull: false,
    type: DataTypes.STRING,
  },
});
