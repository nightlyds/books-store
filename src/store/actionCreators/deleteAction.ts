import { BookDeleteTypes } from "../types";

const deleteAction = (id: number): BookDeleteTypes => ({
    type: "BOOKS_DELETE",
    id,
});

export default deleteAction;
