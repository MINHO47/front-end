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
        alert("chota ne to pupsik");
        console.log(error);
      });
  };

  return (
    <div className="p-4">
      <BackButt />
      <h1 className="text-3x1 my-4">Delete book</h1>
      {loading ? <Spinner /> : ""}
      <div className=" flex flex-col items-center border-2 border-sky-400 rounded-x1 w-[600px] p-8 mx-auto">
        <h3 className="text-2x1">u sure pupsik?</h3>
        <button
          className="p-4 bg-red-700 text-white m-8 w-full"
          onClick={handleDeleteBook}
        >
          am sure!
        </button>
      </div>
    </div>
  );
};

export default DeleteBook;
