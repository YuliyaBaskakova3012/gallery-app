import {put, takeEvery, call} from "redux-saga/effects"
import {changeisLoading, FETCH_USERS, setUsers} from "../pictures-reducer";

const fetchUsersFromApi = () => fetch('https://jsonplaceholder.typicode.com/photos?_limit=24');

function* fetchUserWorker() {
    const data = yield call(fetchUsersFromApi)
    const json = yield call(() => new Promise(res => res(data.json())))
    yield put(setUsers(json))
    yield console.log(json)
    yield put(changeisLoading())
}

export function* userWatcher() {
    yield takeEvery(FETCH_USERS, fetchUserWorker)
}