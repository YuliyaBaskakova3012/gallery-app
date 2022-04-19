import {delay, put, takeEvery} from "redux-saga/effects"
import { changeisLoading, LOAD_PICTURE } from "../picture-reducer";

function* pictureWorker() {
    yield delay(500);
    yield put(changeisLoading());  
}

export function* pictureWatcher() {
    yield takeEvery(LOAD_PICTURE, pictureWorker)
}