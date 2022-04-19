import { all } from "redux-saga/effects";
import {galleryWatcher} from "./gallery-saga";
import {pictureWatcher} from "./picture-saga";

export function* rootWatcher(){
    yield all([galleryWatcher(), pictureWatcher()])
}