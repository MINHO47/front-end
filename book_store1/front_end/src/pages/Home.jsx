import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../Components/Spinner";
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";
import BooksCard from "../Components/home/BooksCard";
import BooksTable from "../Components/home/BooksTable";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("card");

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/books")
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-center items-center gap-x-4 my-4">
        <button
          className="bg-red-300 hover:bg-sky-600 px-4 py-2 rounded-lg"
          onClick={() => setShowType("card")}
        >
          Card View
        </button>
        <button
          className="bg-red-300 hover:bg-sky-600 px-4 py-2 rounded-lg"
          onClick={() => setShowType("table")}
        >
          Table View
        </button>
      </div>
      <div className="flex justify-center items-center my-4">
        <h1 className="text-3xl">Your personal booklist :)</h1>
      </div>
      <Link
        to="/books/create"
        className="bg-red-300 text-white px-2 py-2 rounded-lg flex justify-center items-center"
      >
        <MdOutlineAddBox className="text-4xl ml-2" />
      </Link>

      {loading && (
        <div className="flex justify-center items-center my-8">
          <Spinner />
        </div>
      )}
      {!loading && showType === "table" && <BooksTable books={books} />}
      {!loading && showType === "card" && <BooksCard books={books} />}
    </div>
  );
};

export default Home;
