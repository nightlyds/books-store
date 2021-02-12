import { combineReducers } from "redux";
import booksReducer from "./booksReducer";
import loadingReducer from "./loadingReducer";
import errorReducer from "./errorReducer";
import bookReducer from "./bookReducer";

const reducers = combineReducers({
    booksReducer,
    loadingReducer,
    errorReducer,
    bookReducer,
});

export default reducers;
