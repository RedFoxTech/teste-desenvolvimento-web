import "dotenv/config";
import cors from "cors";
import express, { Request, Response, Router } from "express";
import { AppModule } from "./app.module";
import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export const router = Router();
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use(router);

app.use((err: Error, request: Request, response: Response) => {
  if (err instanceof Error) {
    return response.status(500).json({
      message: err.message,
    });
  }
});

new AppModule().instantiate();

export { app };
