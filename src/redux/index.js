import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { rootWatcher } from "../redux-saga";
import AuthPageReducer from "./reducers/AuthPageReducer";
import FlightsPageReducer from "./reducers/FlightsPageReducer";
import SliderPageReducer from "./reducers/SliderPageReducer";


const sagaMiddleware = createSagaMiddleware()
const rootReducer = combineReducers({
    AuthPageReducer,
    FlightsPageReducer,
    SliderPageReducer
})

export const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
)

window.store = store
sagaMiddleware.run(rootWatcher)