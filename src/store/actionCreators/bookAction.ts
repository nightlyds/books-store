import { BooksObjectTypes, BookLoadTypes } from "../types";

const bookAction = (book: BooksObjectTypes): BookLoadTypes => ({
    type: "BOOK",
    book,
});

export default bookAction;
