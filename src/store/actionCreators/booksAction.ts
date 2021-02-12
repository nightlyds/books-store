import { BooksObjectTypes, BooksTypes } from "../types";

const booksAction = (books: BooksObjectTypes): BooksTypes => ({
    type: "BOOKS",
    books,
});

export default booksAction;
