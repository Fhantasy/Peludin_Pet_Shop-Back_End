import { Sequelize } from "sequelize";

export const sequelize = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  port: 5432,
  database: "peludin_development",
  username: "peludin",
  password: "peludin",
  //Para converter os nomes na aplicação de CamelCase para underscored
  //no banco de dados
  define: {
    underscored: true,
  },
});
