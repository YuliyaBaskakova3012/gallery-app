import {delay, put, takeEvery} from "redux-saga/effects"
import { changeIsLoading, LOAD_PICTURE } from "../picture-reducer";

function* pictureWorker() {
    yield delay(500);
    yield put(changeIsLoading());  
}

export function* pictureWatcher() {
    yield takeEvery(LOAD_PICTURE, pictureWorker)
}