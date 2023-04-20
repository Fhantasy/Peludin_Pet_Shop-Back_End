import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../database";
import bcrypt from "bcrypt";

type CheckPassword = (error?: Error, isSame?: boolean) => void;
export interface User {
  id: number;
  firstName: string;
  lastName: string;
  birth: Date;
  email: string;
  password: string;
  role: "admin" | "user";
}

export interface UserCreationAttributes extends Optional<User, "id"> {}
export interface UserInstance
  extends Model<User, UserCreationAttributes>,
    User {
  checkPassword: (password: string, callbackfn: CheckPassword) => void;
}

export const User = sequelize.define<UserInstance, User>(
  "User",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    firstName: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    lastName: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    birth: {
      allowNull: false,
      type: DataTypes.DATE,
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
      validate: {
        isIn: [["admin", "user"]],
      },
    },
  },
  {
    hooks: {
      beforeSave: async (user) => {
        if (user.isNewRecord || user.changed("password")) {
          user.password = await bcrypt.hash(user.password.toString(), 10);
        }
      },
    },
  }
);

//O prototype insere o metodo no model para todas as instancias
User.prototype.checkPassword = function (
  password: string,
  callbackfn: CheckPassword
) {
  bcrypt.compare(password, this.password, (error, isSame) => {
    if (error) {
      callbackfn(error);
    } else {
      callbackfn(error, isSame);
    }
  });
};
