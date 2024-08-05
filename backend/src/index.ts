import express, { Application, Request, Response } from "express";
import router from "./routes/routes";

const app: Application = express();

app.use(express.json());

app.use(router);

app.listen("3000", () => {
  console.log("servidor rodando");
});
