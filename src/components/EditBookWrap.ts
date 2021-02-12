import { connect } from "react-redux";
import EditBook from "./EditBook";
import mapStateToProps from "../store/mapStateToProps";
import mapDispatchToProps from "../store/mapDispatchToProps";

const EditBookWrap = connect<any, any, any>(
    mapStateToProps("EDIT_BOOK"),
    mapDispatchToProps("EDIT_BOOK")
)(EditBook);

export default EditBookWrap;
