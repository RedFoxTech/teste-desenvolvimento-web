import "dotenv/config";
import mongoose from "mongoose";
import app from "./app";

mongoose.connect(process.env.MONGO_URL!).then(() => {
  app.listen(process.env.PORT || 5500, () =>
    console.log(`Running on port ${process.env.PORT || 5500}`)
  );
});
