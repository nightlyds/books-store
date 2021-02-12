import initialState from "../initialState";
import { BookLoadTypes } from "../types";

const bookReducer = (state = initialState.book, action: BookLoadTypes) => {
    switch (action.type) {
        case "BOOK":
            return action.book;
        default:
            return state;
    }
};

export default bookReducer;
