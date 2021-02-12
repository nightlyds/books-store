import { BookType, AddBookTypes } from "../types";

const addBookAction = (data: BookType): AddBookTypes => ({
    type: "ADD_BOOK",
    data,
});

export default addBookAction;
