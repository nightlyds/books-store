/* eslint-disable func-names */
type MapStateToPropsTypes = {
    booksReducer?: Array<Object>;
    loadingReducer?: boolean;
    errorReducer?: boolean;
    bookReducer?: Array<Object>;
};

function mapStateToProps(component: string) {
    switch (component) {
        case "BOOKS_STORE":
            return function (state: MapStateToPropsTypes) {
                return {
                    books: state.booksReducer,
                    loading: state.loadingReducer,
                    error: state.errorReducer,
                };
            };
        case "ADD_BOOK":
            return function (state: MapStateToPropsTypes) {
                return {
                    loading: state.loadingReducer,
                    error: state.errorReducer,
                    books: state.booksReducer,
                };
            };
        case "EDIT_BOOK":
            return function (state: MapStateToPropsTypes) {
                return {
                    loading: state.loadingReducer,
                    error: state.errorReducer,
                    book: state.bookReducer,
                };
            };
        default:
            return undefined;
    }
}

export default mapStateToProps;
