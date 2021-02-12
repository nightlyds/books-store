import { connect } from "react-redux";
import AddBook, { AddBookProps } from "./AddBook";
import mapStateToProps from "../store/mapStateToProps";
import mapDispatchToProps from "../store/mapDispatchToProps";

const AddBookWrap = connect<any, any, AddBookProps>(
    mapStateToProps("ADD_BOOK"),
    mapDispatchToProps("ADD_BOOK")
)(AddBook);

export default AddBookWrap;
