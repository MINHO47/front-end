import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    publisheYear: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const Book = mongoose.model("Book", bookSchema);
export default Book;
