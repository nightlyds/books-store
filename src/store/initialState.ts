export type InitialStateTypes = {
    books: Array<Object>;
    book: Array<Object>;
    loading: boolean;
    error: boolean;
};

const initialState: InitialStateTypes = {
    books: [{}],
    book: [{}],
    loading: false,
    error: false,
};

export default initialState;
