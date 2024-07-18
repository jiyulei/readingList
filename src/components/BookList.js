import BookShow from "./BookShow";
import { createContext, useContext } from "react";
import BooksContext from "../context/book";

function BookList() {
  const { books } = useContext(BooksContext);

  const renderedList = books.map((book) => {
    return (
      <BookShow book={book} key={book.id} />
    );
  });

  return <div className="book-list">{renderedList}</div>;
}

export default BookList;
