import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express";
import AdiminJSSequelize from "@adminjs/sequelize";
import { sequelize } from "../database";

//Passa o adaptador do banco de dados que será utilizado
AdminJS.registerAdapter(AdiminJSSequelize);

//Cria a instancia do AdminJS com suas configurações
export const adminJs = new AdminJS({
  //Banco de dados usado
  databases: [sequelize],
  //Caminho da rota
  rootPath: "/admin",
  branding: {
    companyName: "Peludin Pet Shop",
    logo: "/images/LogoPeludin.png",
    theme: {
      colors: {
        primary100: "#14888b",
        primary80: "#14888b",
        primary60: "#14888b",
        primary40: "#14888b",
        primary20: "#14888b",
        grey100: "#c95c7a",
        grey80: "#c95c7a",
        grey60: "#c95c7a",
        grey40: "#c95c7a",
        grey20: "#c95c7a",
        filterBg: "14888b",
        accent: "#151515",
        hoverBg: "#151515",
      },
    },
  },
});

//Constroi e insere as rotas do AdminJS no express
export const adminJsRouter = AdminJSExpress.buildRouter(adminJs);
