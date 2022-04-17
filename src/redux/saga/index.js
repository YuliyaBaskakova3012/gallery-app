import { all } from "redux-saga/effects";
import {usersWatcher} from "./picture-saga";
import {imageWatcher} from "./image-saga";
export function* rootWatcher(){
    yield all([usersWatcher(), imageWatcher()])
}