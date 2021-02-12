import { connect } from "react-redux";
import BooksStore, { BooksStoreProps } from "./BooksStore";
import mapStateToProps from "./store/mapStateToProps";
import mapDispatchToProps from "./store/mapDispatchToProps";

const BooksStoreWrap = connect<any, any, BooksStoreProps>(
    mapStateToProps("BOOKS_STORE"),
    mapDispatchToProps("BOOKS_STORE")
)(BooksStore);

export default BooksStoreWrap;
