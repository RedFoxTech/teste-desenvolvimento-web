import express, { Request, Response, Application } from "express";
import routes from "./routes";
import mongoose from "mongoose";
import cors from "cors";
import swaggerUI from "swagger-ui-express";
import * as swaggerDoc from "../docs/swagger.json";

const PORT = process.env.PORT || 3333;

mongoose
  .connect("mongodb://localhost:27017/test", { useNewUrlParser: true })
  .then(() => {
    const app: Application = express();

    app.use(express.json());
    app.use(cors());
    app.use(routes);
    app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDoc));

    app.get("/", (req: Request, res: Response) =>
      res.send("RedFox - Teste Wesley M Oliveira")
    );

    app.listen(PORT, () => console.log("O Servidor está rodando"));
  });
