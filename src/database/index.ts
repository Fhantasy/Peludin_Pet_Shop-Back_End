import { Sequelize } from "sequelize";
import { DATABASE_URL } from "../config/enviroment";

export const sequelize = new Sequelize(DATABASE_URL, {
  //Para converter os nomes na aplicação de CamelCase para underscored
  //no banco de dados
  define: {
    underscored: true,
  },
});
