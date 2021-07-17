import { call, put, takeEvery } from "redux-saga/effects";
import { FETCH_FLIGHTS, requestFlightsFailedCreator, setFlightsCreator } from "../redux/reducers/FlightsPageReducer";
import { Api } from "./FetchData/Fetch";

function fetchBrowseQuotes(payload) {
    return Api.browseQuotes(payload.payload)
        .then(response => ({ response }))
        .catch(error => ({ error }))
}

async function ReadStream(response) {
    const reader = response.body.getReader()

    while (true) {
        const { done, value } = await reader.read();
        if (done) {
            break;
        }
        const str = new TextDecoder().decode(value);
        const data = JSON.parse(str)
        return data
    }
}


function* browseQuotesWorker(payload) {
    const { response, error } = yield call(fetchBrowseQuotes, payload)
    if (response) {
        const flights = yield call(ReadStream, response)
        yield put(setFlightsCreator(flights))
    } else {
        yield put(requestFlightsFailedCreator(error))
    }
}

export function* browseQuotesWatcher() {
    yield takeEvery(FETCH_FLIGHTS, browseQuotesWorker)
}