import { all } from "@redux-saga/core/effects";
import { AuthPageWatcher } from "./AuthPageSaga";
import { browseQuotesWatcher } from "./FlightsPageSaga";


export function* rootWatcher() {
    yield all([AuthPageWatcher(), browseQuotesWatcher()])
}