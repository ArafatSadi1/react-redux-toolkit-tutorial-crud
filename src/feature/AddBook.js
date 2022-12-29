import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBook } from "./BookSlice";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const dispatch = useDispatch();
  const numberOfBooks = useSelector((state) => state.booksReducer.books.length);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = { id: numberOfBooks + 1, title: title, author: author };
    dispatch(addBook(book));
    navigate("/show-books", { replace: true });
  };
  return (
    <div>
      <h3>Add a book</h3>
      <form onSubmit={handleSubmit}>
        <div className="input-field">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="input-field">
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            name="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add book</button>
      </form>
    </div>
  );
};

export default AddBook;
