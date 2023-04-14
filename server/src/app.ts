import express from "express";
import "express-async-errors";
import "reflect-metadata";
import cors from "cors";

import handleAppErrorMiddleware from "./middlewares/errors/handleAppError.middleware";
import pokemonsRoute from "./routers/pokemons/pokemons.routes";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/pokemons", pokemonsRoute);

app.use(handleAppErrorMiddleware);

export default app;
