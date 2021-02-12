/* eslint-disable func-names */
import { AnyAction, bindActionCreators, Dispatch } from "redux";
import deleteAction from "./actionCreators/deleteAction";
import loadUpAction from "./actionCreators/loadUpAction";
import addBookAction from "./actionCreators/addBookAction";
import editBookAction from "./actionCreators/editBookAction";
import loadUpBookAction from "./actionCreators/loadUpBook";

function mapDispatchToProps(component: string) {
    switch (component) {
        case "BOOKS_STORE":
            return function (dispatch: Dispatch<AnyAction>) {
                return {
                    loadUp: bindActionCreators(loadUpAction, dispatch),
                    deleteBook: bindActionCreators(deleteAction, dispatch),
                };
            };
        case "ADD_BOOK":
            return function (dispatch: Dispatch<AnyAction>) {
                return {
                    loadUp: bindActionCreators(loadUpAction, dispatch),
                    addBook: bindActionCreators(addBookAction, dispatch),
                };
            };
        case "EDIT_BOOK":
            return function (dispatch: Dispatch<AnyAction>) {
                return {
                    editBook: bindActionCreators(editBookAction, dispatch),
                    loadUpBook: bindActionCreators(loadUpBookAction, dispatch),
                };
            };
        default:
            return undefined;
    }
}

export default mapDispatchToProps;
