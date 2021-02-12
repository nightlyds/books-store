import { call, put, takeLatest } from "redux-saga/effects";
import { BookDeleteTypes } from "../types";
import { apiRequestLoad, apiRequestDelete } from "./apiRequest";
import booksAction from "../actionCreators/booksAction";
import loadingAction from "../actionCreators/loadingAction";
import errorAction from "../actionCreators/errorAction";

export function* workerBooks() {
    yield put(loadingAction(false)); // We dispatch loading and error to false for default
    yield put(errorAction(false));
    try {
        const request = yield call(
            apiRequestLoad,
            `http://localhost:4000/books` // Request books
        );
        yield put(booksAction(request)); // Dispatch the requested data
    } catch {
        yield put(errorAction(true)); // If we catch an error, we will get error message
    }
    yield put(loadingAction(true)); // After all set loaded
}

export function* watchBooks() {
    yield takeLatest("LOAD_UP", workerBooks); // Looking at special query and call according to that generator (function)
}

export function* workerBooksDelete(action: BookDeleteTypes) {
    yield call(
        apiRequestDelete,
        `http://localhost:4000/books/`,
        action.id // Delete book with special ID from action
    );
    yield put(loadingAction(false)); // We dispatch loading and error to false for default
    yield put(errorAction(false));
    try {
        const request = yield call(
            apiRequestLoad,
            `http://localhost:4000/books` // Request books
        );
        yield put(booksAction(request)); // Dispatch the requested data
    } catch {
        yield put(errorAction(true)); // If we catch an error, we will get error message
    }
    yield put(loadingAction(true)); // After all set loaded
}

export function* watchBooksDelete() {
    yield takeLatest("BOOKS_DELETE", workerBooksDelete); // Looking at special query and call according to that generator (function)
}
