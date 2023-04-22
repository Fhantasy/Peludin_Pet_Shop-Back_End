import express from "express";
import cors from "cors";
import { sequelize } from "./database";
import { adminJs, adminJsRouter } from "./adminJs";
import { router } from "./routes";

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.static("public"));

//(caminho, rotas)
app.use(adminJs.options.rootPath, adminJsRouter);

app.use(router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  sequelize.authenticate().then(() => {
    console.log("DB connection sussccefull");
  });
  console.log(`Server started successfuly at port ${PORT}`);
});
