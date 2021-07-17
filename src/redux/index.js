import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { rootWatcher } from "../redux-saga";
import AuthPageReducer from "./reducers/AuthPageReducer";
import MainPageReducer from "./reducers/MainPageReducer";

const sagaMiddleware = createSagaMiddleware()
const rootReducer = combineReducers({
    AuthPageReducer,
    MainPageReducer
})

export const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
)

window.store = store
sagaMiddleware.run(rootWatcher)