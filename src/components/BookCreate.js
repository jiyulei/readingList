import { useState, useContext } from "react";
import BooksContext from "../context/book";
import "../index.css";

function BookCreate() {
  const { createBook } = useContext(BooksContext);

  const [book, setBook] = useState("New Book");

  const handleChange = (event) => {
    setBook(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createBook(book);
    setBook("");
  };

  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          className="input"
          type="text"
          value={book}
          onChange={handleChange}
        />
        <button className="button">Create!</button>
      </form>
    </div>
  );
}

export default BookCreate;
