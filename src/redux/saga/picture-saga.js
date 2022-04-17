import {put, takeEvery} from "redux-saga/effects"
import {changeisLoading, FETCH_PICTURES, setPictures} from "../pictures-reducer";
import axios from "axios";

const apiUrl='https://jsonplaceholder.typicode.com/photos?_limit=24';
const delay=(ms)=>new Promise(res=>setTimeout(res, ms));

function* fetchPicturesWorker() {
    const data = yield axios.get(apiUrl).then((resp) => {
    const data=resp.data;
        return data;
      });
    yield put(setPictures(data))
    yield delay(500);
    yield put(changeisLoading())
}

export function* picturesWatcher() {
    yield takeEvery(FETCH_PICTURES, fetchPicturesWorker)
}

