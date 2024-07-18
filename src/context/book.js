import { createContext, useState } from "react";

const BooksContext = createContext();

function Provider({ children }) {
  return <BooksContext>{children}</BooksContext>;
}

export default BooksContext;
