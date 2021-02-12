import { createStore, applyMiddleware } from "redux";
import SagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import rootSaga from "./sagas/rootSaga";
import reducers from "./reducers/reducers";

const saga = SagaMiddleware();

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(logger, saga))
);

saga.run(rootSaga);

export default store;
