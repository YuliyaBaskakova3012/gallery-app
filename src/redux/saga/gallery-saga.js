import {delay, put, takeEvery} from "redux-saga/effects"
import {changeisLoading, FETCH_PICTURES, setPictures} from "../gallery-reducer";
import axios from "axios";

const apiUrl='https://jsonplaceholder.typicode.com/photos?_limit=24';

function* fetchPicturesWorker() {
    const data = yield axios.get(apiUrl).then((resp) => {
    const data=resp.data;
        return data;
      });
    yield put(setPictures(data));
    yield delay(500);
    yield put(changeisLoading());
}

export function* galleryWatcher() {
    yield takeEvery(FETCH_PICTURES, fetchPicturesWorker);
}

