import express, { request, response } from "express";
import mongoose from "mongoose";
import booksRoute from "./Routes/booksRoute.js";
import cors from "cors";

const PORT = 5555;
const app = express();

app.use(express.json());
app.use(cors());

const mongoDBURL =
  "mongodb+srv://elgato:elgatito2020@newprojektumanusum2002.eoc9hzi.mongodb.net/?retryWrites=true&w=majority";
//sanity check lol
app.get("/", (request, response) => {
  console.log(request);
  return response.status(200).send("all good mister pupsik!");
});

app.use("/books", booksRoute);
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
