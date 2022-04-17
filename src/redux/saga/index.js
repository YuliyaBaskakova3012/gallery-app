import { all } from "redux-saga/effects";
import {picturesWatcher} from "./picture-saga";
import {imageWatcher} from "./image-saga";

export function* rootWatcher(){
    yield all([picturesWatcher(), imageWatcher()])
}