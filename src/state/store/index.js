import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

// Root Reducer
import { rootReducer } from "./reducer";

// Root Saga
import { rootSaga } from "./saga";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

const configureStore = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);

export default configureStore;
