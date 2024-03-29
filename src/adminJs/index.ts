import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express";
import AdiminJSSequelize from "@adminjs/sequelize";
import { sequelize } from "../database";
import { adminJsResources } from "./resources";
import { locale } from "./locale";
import { dashBoardOptions } from "./dashboard";
import { brandingOptions } from "./branding";
import { authenticationOptions } from "./authentication";
import { componentLoader } from "./components";
import session from "express-session";
import connectSession from "connect-session-sequelize";
import { ADMINJS_COOKIE_PASS } from "../config/enviroment";

const SequelizeStore = connectSession(session.Store);
const store = new SequelizeStore({ db: sequelize });
store.sync();

//Passa o adaptador do banco de dados que será utilizado
AdminJS.registerAdapter(AdiminJSSequelize);

//Cria a instancia do AdminJS com suas configurações
export const adminJs = new AdminJS({
  //Banco de dados usado
  databases: [sequelize],
  //Caminho da rota
  rootPath: "/admin",
  resources: adminJsResources,
  locale: locale,
  dashboard: dashBoardOptions,
  componentLoader,
  branding: brandingOptions,
});

//Constroi e insere as rotas do AdminJS no express com autenticação
export const adminJsRouter = AdminJSExpress.buildAuthenticatedRouter(
  adminJs,
  authenticationOptions,
  null,
  {
    resave: false,
    saveUninitialized: false,
    store: store,
    secret: ADMINJS_COOKIE_PASS,
  }
);
