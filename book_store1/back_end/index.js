import express from "express";
import mongoose from "mongoose";

const PORT = 5555;

const app = express();

const mongoDBURL =
  "mongodb+srv://elgato:elgatito2020@newprojektumanusum2002.eoc9hzi.mongodb.net/?retryWrites=true&w=majority";

app.get("/", (request, response) => {
  console.log(request);
  return response.status(562).send("auf ia vor pidari bliaaa");
});

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("database is on air");
    app.listen(PORT, () => {
      console.log(`app is on: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
