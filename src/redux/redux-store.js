import { applyMiddleware, combineReducers, createStore } from "redux";
import picturesReducer from "./pictures-reducer";
import createSagaMiddleware from "redux-saga";
import { userWatcher } from "./saga/picture-saga";
const sagaMiddleware=createSagaMiddleware();
const redusers=combineReducers({
pictures: picturesReducer
})
const store=createStore(redusers, applyMiddleware(sagaMiddleware));
export default store;
sagaMiddleware.run(userWatcher)