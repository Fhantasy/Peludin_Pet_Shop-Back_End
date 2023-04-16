import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express";
import AdiminJSSequelize from "@adminjs/sequelize";
import { sequelize } from "../database";
import { adminJsResources } from "./resources";
import { User } from "../models";
import bcrypt from "bcrypt";

//Passa o adaptador do banco de dados que será utilizado
AdminJS.registerAdapter(AdiminJSSequelize);

//Cria a instancia do AdminJS com suas configurações
export const adminJs = new AdminJS({
  //Banco de dados usado
  databases: [sequelize],
  //Caminho da rota
  rootPath: "/admin",
  resources: adminJsResources,
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
        grey80: "#696969",
        grey60: "#696969",
        grey40: "#696969",
        grey20: "#dddddd",
        filterBg: "#333333",
        accent: "#151515",
        hoverBg: "#151515",
      },
    },
  },
});

//Constroi e insere as rotas do AdminJS no express
export const adminJsRouter = AdminJSExpress.buildAuthenticatedRouter(
  adminJs,
  {
    authenticate: async (email, password) => {
      const user = await User.findOne({ where: { email } });

      if (user && user.role === "admin") {
        const matched = await bcrypt.compare(password, user.password);

        if (matched) {
          return user;
        }
      }
      return false;
    },
    cookiePassword: "senha-do-cookie",
  },
  null,
  { resave: false, saveUninitialized: false }
);
