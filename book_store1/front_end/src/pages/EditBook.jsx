import React, { useState, useEffect } from "react";
import BackButt from "../Components/BackButt";
import Spinner from "../Components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publisheYear, setPublisheYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setTitle(response.data.title);
        setAuthor(response.data.author);
        setPublisheYear(response.data.publisheYear);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        alert(
          "An error occurred while fetching book details. Please try again."
        );
        console.log(error);
      });
  }, [id]);

  const handleEditBook = () => {
    const data = {
      title,
      author,
      publisheYear,
    };
    setLoading(true);
    axios
      .put(`http://localhost:5555/books/${id}`, data)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        alert("An error occurred while editing the book. Please try again.");
        console.log(error);
      });
  };

  return (
    <div className="p-4">
      <BackButt />
      <h1 className="text-3xl my-4">Edit Book</h1>
      <div className="flex flex-col border-2 border-red-300 rounded-xl w-[600px] p-4 mx-auto">
        {loading && <Spinner />}
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
        <button
          className="p-2 bg-red-300 m-8 hover:bg-sky-600"
          onClick={handleEditBook}
        >
          Save edited book
        </button>
      </div>
    </div>
  );
};

export default EditBook;
