import { useState, useContext } from "react";
import BooksContext from "../context/book";

function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);
  const { updateTitleById } = useContext(BooksContext);

  const handleOnChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit();
    updateTitleById(title, book.id);
  };

  return (
    <form className="book-edit" onSubmit={handleSubmit}>
      <label>Title</label>
      <input className="input" value={title} onChange={handleOnChange} />
      <button className="button is-primary">Save</button>
    </form>
  );
}

export default BookEdit;
