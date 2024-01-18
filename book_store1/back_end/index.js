import express, { request, response } from "express";
import mongoose from "mongoose";
import Book from "./models/bookmodels.js";

const PORT = 5555;
const app = express();

app.use(express.json());

const mongoDBURL =
  "mongodb+srv://elgato:elgatito2020@newprojektumanusum2002.eoc9hzi.mongodb.net/?retryWrites=true&w=majority";

app.get("/", (request, response) => {
  console.log(request);
  return response.status(200).send("auf ia vor pidari bliaaa");
});

app.post("/books", async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.author ||
      !request.body.publisheYear
    ) {
      return response.status(400).send({
        message: "Send all info bobik",
      });
    }
    const newBook = {
      title: request.body.title,
      author: request.body.author,
      publisheYear: request.body.publisheYear,
    };
    const book = await Book.create(newBook);
    return response.status(201).send(book);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

app.get("/books", async (request, response) => {
  try {
    const books = await Book.find({});
    return response.status(200).json(books);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
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
