import { call, put, takeLatest } from "redux-saga/effects";
import { LoadUpBookTypes, EditBookTypes } from "../types";
import { apiRequestLoad, apiRequestChange } from "./apiRequest";
import bookAction from "../actionCreators/bookAction";
import loadingAction from "../actionCreators/loadingAction";
import errorAction from "../actionCreators/errorAction";

export function* workerBook(action: LoadUpBookTypes) {
    yield put(loadingAction(false)); // We dispatch loading and error to false for default
    yield put(errorAction(false));
    try {
        const request = yield call(
            apiRequestLoad,
            `http://localhost:4000/books/${action.id}` // Request book with special ID
        );
        yield put(bookAction(request)); // Dispatch the requested data
    } catch {
        yield put(errorAction(true)); // If we catch an error, we will get error message
    }
    yield put(loadingAction(true)); // After all set loaded
}

export function* watchBook() {
    yield takeLatest("LOAD_UP_BOOK", workerBook); // Looking at special query and call according to that generator (function)
}

export function* workerEditBook(action: EditBookTypes) {
    yield put(loadingAction(false)); // We dispatch loading and error to false for default
    yield put(errorAction(false));
    try {
        yield call(
            apiRequestChange,
            `http://localhost:4000/books/${action.id}`,
            action.data // Edit data
        );
    } catch {
        yield put(errorAction(true)); // If we catch an error, we will get error message
    }
    yield put(loadingAction(true)); // After all set loaded
}

export function* watchEditBook() {
    yield takeLatest("EDIT_BOOK", workerEditBook); // Looking at special query and call according to that generator (function)
}
