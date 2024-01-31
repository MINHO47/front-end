import express from "express";
import Book from "../models/bookmodels.js";
const router = express.Router();

//creating a book in database
router.post("/", async (request, response) => {
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
//getting all book method
router.get("/", async (request, response) => {
  try {
    const books = await Book.find({});
    return response.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});
//getting specific book method
router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const book = await Book.findById(id);
    return response.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});
//updating the list method
router.put("/:id", async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.author ||
      !request.body.publisheYear
    ) {
      return response.status(400).send({
        message: "SEND ALL INFO BOBIK",
      });
    }

    const { id } = request.params;
    const result = await Book.findByIdAndUpdate(id, request.body);
    if (!result) {
      return response.status(404).json({ message: "book not found :-(" });
    } else {
      return response
        .status(200)
        .send({ message: "updated succesfully pupsik!" });
    }
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const result = await Book.findByIdAndDelete(id);
    if (!result) {
      return response
        .status(404)
        .json({ message: "Book nowhere to be found pupsik!" });
    } else {
      return response
        .status(200)
        .send({ messge: "deleted succesfully mister pipister" });
    }
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;
