import BookShow from "./BookShow";

function BookList({ bookList, onDelete, onEdit }) {
  const renderedList = bookList.map((book) => {
    return (
      <BookShow book={book} key={book.id} onDelete={onDelete} onEdit={onEdit} />
    );
  });

  return <div className="book-list">{renderedList}</div>;
}

export default BookList;
