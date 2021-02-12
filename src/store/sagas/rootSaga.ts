import { all } from "redux-saga/effects";
import { watchBooks, watchBooksDelete } from "./booksSaga";
import { watchAddBook } from "./addBookSaga";
import { watchBook, watchEditBook } from "./editBookSaga";

export default function* rootSaga() {
    yield all([
        watchBooks(),
        watchBooksDelete(),
        watchAddBook(),
        watchBook(),
        watchEditBook(),
    ]); // Root Saga is looking for children sagas and combine their together
}
