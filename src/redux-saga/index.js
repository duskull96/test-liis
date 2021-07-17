import { all } from "@redux-saga/core/effects";
import { AuthPageWatcher } from "./AuthPageSaga";
import { browseQuotesWatcher } from "./MainPageSaga";


export function* rootWatcher() {
    yield all([AuthPageWatcher(), browseQuotesWatcher()])
}