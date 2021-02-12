import initialState from "../initialState";
import { BooksTypes } from "../types";

const booksReducer = (state = initialState.books, action: BooksTypes) => {
    switch (action.type) {
        case "BOOKS":
            return action.books;
        default:
            return state;
    }
};

export default booksReducer;
