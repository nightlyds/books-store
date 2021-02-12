import { call, put, takeLatest } from "redux-saga/effects";
import { AddBookTypes } from "../types";
import { apiRequestAdd } from "./apiRequest";
import loadingAction from "../actionCreators/loadingAction";
import errorAction from "../actionCreators/errorAction";

export function* workerAddBook(action: AddBookTypes) {
    yield put(loadingAction(false)); // We dispatch loading and error to false for default
    yield put(errorAction(false));
    try {
        yield call(
            apiRequestAdd,
            `http://localhost:4000/books`,
            action.data // Request book with special ID
        );
    } catch {
        yield put(errorAction(true)); // If we catch an error, we will get error message
    }
    yield put(loadingAction(true)); // After all set loaded
}

export function* watchAddBook() {
    yield takeLatest("ADD_BOOK", workerAddBook); // Looking at special query and call according to that generator (function)
}
