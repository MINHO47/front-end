import React, { useState } from "react";
import BackButt from "../Components/BackButt";
import Spinner from "../Components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        alert("An error occurred while deleting the book. Please try again.");
        console.log(error);
      });
  };

  return (
    <div className="p-4">
      <BackButt />
      <h1 className="text-3xl my-4">Delete Book</h1>
      {loading && <Spinner />}
      <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
        <h3 className="text-2xl text-red-600 font-bold mb-4">
          Are you sure you want to delete this book?
        </h3>
        <button
          className="p-4 bg-red-700 text-white w-full rounded-md hover:bg-red-800"
          onClick={handleDeleteBook}
        >
          Yes, delete it!
        </button>
      </div>
    </div>
  );
};

export default DeleteBook;
