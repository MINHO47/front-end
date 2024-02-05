import React, { useState } from "react";
import BackButt from "../Components/BackButt";
import Spinner from "../Components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publisheYear, setPublisheYear] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publisheYear,
    };
    setLoading(true);
    axios
      .post("http://localhost:5555/books", data)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        setError("Something went wrong. Please try again.");
        console.log(error);
      });
  };

  return (
    <div className="p-4">
      <BackButt />
      <h1 className="text-3xl my-4">Create Book</h1>
      <div className="flex flex-col border-2 border-red-300 rounded-xl w-[600px] p-4 mx-auto ">
        {loading && <Spinner />}{" "}
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 rounded-xl border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border-2 rounded-xl border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Publish Year</label>
          <input
            type="number"
            value={publisheYear}
            onChange={(e) => setPublisheYear(e.target.value)}
            className="border-2 rounded-xl border-gray-500 px-4 py-2 w-full"
          />
        </div>
        {error && <p className="text-red-500 my-2">{error}</p>}{" "}
        <button
          className="p-2 bg-red-300 m-8 hover:bg-sky-600"
          onClick={handleSaveBook}
        >
          Save new book
        </button>
      </div>
    </div>
  );
};

export default CreateBook;
