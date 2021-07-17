import { Api } from './FetchData/Fetch'
import { call, put, takeEvery } from 'redux-saga/effects'
import { FETCH_TOKEN, requestTokenFailedCreator, setTokenCreator } from '../redux/reducers/AuthPageReducer'

function fetchTokenApi(payload) {
    return Api.getToken( payload.payload.username, payload.payload.password)
        .then(response => ({ response }))
        .catch(error => ({ error }))
}

function* fetchTokenWorker(payload) {
    const { response, error } = yield call(fetchTokenApi, payload)
    if (response) {
        switch (response.status) {
            case 200:
                yield put(setTokenCreator(response.body.message))
                return
            case 400:
                yield put(requestTokenFailedCreator({ message: response.body.message, status: response.status }))
                return
            default:
                return
        }
    }
    else {
        yield put(requestTokenFailedCreator(error))
    }
}

export function* AuthPageWatcher() {
    yield takeEvery(FETCH_TOKEN, fetchTokenWorker)
}