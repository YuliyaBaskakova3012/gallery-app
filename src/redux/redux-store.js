import { applyMiddleware, combineReducers, createStore } from "redux";
import picturesReducer from "./pictures-reducer";
import createSagaMiddleware from "redux-saga";
import pictureReducer from "./picture-reducer";
import { rootWatcher } from "./saga";
const sagaMiddleware=createSagaMiddleware();
const redusers=combineReducers({
pictures: picturesReducer,
picture: pictureReducer
})
const store=createStore(redusers, applyMiddleware(sagaMiddleware));
export default store;
sagaMiddleware.run(rootWatcher)