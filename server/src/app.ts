import "dotenv/config";
import express from "express";
import "express-async-errors";
import "reflect-metadata";
import cors from "cors";
import mongoose from "mongoose";
import handleAppErrorMiddleware from "./middlewares/errors/handleAppError.middleware";
import pokemonsRoute from "./routers/pokemons/pokemons.routes";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/pokemons", pokemonsRoute);

app.use(handleAppErrorMiddleware);

mongoose.connect(process.env.MONGO_URL!).then(() => {
  app.listen(process.env.PORT || 5500, () =>
    console.log(`listening on port ${process.env.PORT}`)
  );
});
