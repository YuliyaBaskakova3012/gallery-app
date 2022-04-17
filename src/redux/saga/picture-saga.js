import {put, takeEvery, call} from "redux-saga/effects"
import {changeisLoading, FETCH_USERS, setUsers} from "../pictures-reducer";

const fetchUsersFromApi = () => fetch('https://jsonplaceholder.typicode.com/photos?_limit=24');
const delay=(ms)=>new Promise(res=>setTimeout(res, ms));

function* fetchUserWorker() {
    const data = yield call(fetchUsersFromApi)
    const json = yield call(() => new Promise(res => res(data.json())))
    yield put(setUsers(json))
    yield delay(500);
    yield put(changeisLoading())
}

export function* usersWatcher() {
    yield takeEvery(FETCH_USERS, fetchUserWorker)
}

