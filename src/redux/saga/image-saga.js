import {put, takeEvery} from "redux-saga/effects"
import { changeisLoading, LOAD_PICTURE } from "../picture-reducer";

const delay=(ms)=>new Promise(res=>setTimeout(res, ms));

function* imageWorker() {
    yield delay(500);
    yield put(changeisLoading());  
}

export function* imageWatcher() {
    yield takeEvery(LOAD_PICTURE, imageWorker)
}