import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButt from "../Components/BackButt";
import Spinner from "../Components/Spinner";

// ... (other imports)

const ShowBooks = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
        setError("Failed to fetch book details. Please try again later.");
      });
  }, [id]);

  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
    return new Date(dateString).toLocaleString("en-US", options);
  };

  return (
    <div className="flex items-center justify-center h-full">
      <div className="p-4 bg-white border-2 border-sky-400 rounded-xl">
        <BackButt />
        <h1 className="text-3xl my-4">Your Chosen Book</h1>
        {loading ? (
          <Spinner />
        ) : error ? (
          <p className="text-red-600">{error}</p>
        ) : (
          <div className="flex flex-col">
            <div className="my-2">
              <span className="text-xl mr-4 text-gray-500">ID:</span>
              <span>{book._id}</span>
            </div>
            <div className="my-2">
              <span className="text-xl mr-4 text-gray-500">Title:</span>
              <span>{book.title}</span>
            </div>
            <div className="my-2">
              <span className="text-xl mr-4 text-gray-500">Author:</span>
              <span>{book.author}</span>
            </div>
            <div className="my-2">
              <span className="text-xl mr-4 text-gray-500">Publish Year:</span>
              <span>{book.publisheYear}</span>
            </div>
            <div className="my-2">
              <span className="text-xl mr-4 text-gray-500">Create Time:</span>
              <span>{formatDate(book.createdAt)}</span>
            </div>
            <div className="my-2">
              <span className="text-xl mr-4 text-gray-500">Update Time:</span>
              <span>{formatDate(book.updatedAt)}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowBooks;
