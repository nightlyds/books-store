import { LoadUpBookTypes } from "../types";

const loadUpBookAction = (id: number): LoadUpBookTypes => ({
    type: "LOAD_UP_BOOK",
    id,
});

export default loadUpBookAction;
