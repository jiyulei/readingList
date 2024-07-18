import { useState, useContext } from "react";
import BookEdit from "./BookEdit";
import BooksContext from "../context/book";


function BookShow({ book }) {
  const { deleteBookById } = useContext(BooksContext);

  const [showEdit, setShowEdit] = useState(false);

  const handleSumit = () => {
    setShowEdit(false);
  };

  return (
    <div className="book-show">
      <img alt="books" src={`https://picsum.photos/seed/${book.id}/300/200`} />
      {showEdit ? (
        <BookEdit book={book} onSubmit={handleSumit} />
      ) : (
        <h3>{book.title}</h3>
      )}
      <div className="actions">
        <button className="edit" onClick={() => setShowEdit(!showEdit)}>
          Edit
        </button>
        <button className="delete" onClick={() => deleteBookById(book.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
