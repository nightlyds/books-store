import { BookType, EditBookTypes } from "../types";

const editBookAction = (data: BookType, id: number): EditBookTypes => ({
    type: "EDIT_BOOK",
    data,
    id,
});

export default editBookAction;
