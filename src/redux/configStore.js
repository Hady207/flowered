import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

const middleware = [];
const enhancers = [];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();
middleware.push(sagaMiddleware);
enhancers.push(applyMiddleware(...middleware));

const store = createStore(rootReducer, composeEnhancers(...enhancers));
// Kick off the root saga
sagaMiddleware.run(rootSaga);

export { store };
