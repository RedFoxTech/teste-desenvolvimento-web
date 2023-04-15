import "dotenv/config";
import mongoose from "mongoose";
import app from "./app";
import { AppError } from "./errors/AppError";
import dataBaseSeeder from "./utils/dataBaseSeeder";

mongoose
  .connect(process.env.MONGO_URL!)
  .then(() => {
    app.listen(process.env.PORT || 5500, () =>
      console.log(`Running on port ${process.env.PORT || 5500}`)
    );
    //Function that populates the database with a predefined array of pokemons data
    dataBaseSeeder();
  })
  .catch((err) => {
    throw new AppError(400, `${err.message}`);
  });
