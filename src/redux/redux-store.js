import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import picturesReducer from "./pictures-reducer";
import createSagaMiddleware from "redux-saga";
import pictureReducer from "./picture-reducer";
import { rootWatcher } from "./saga";
const sagaMiddleware=createSagaMiddleware();
const redusers=combineReducers({
pictures: picturesReducer,
picture: pictureReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(redusers, composeEnhancers(applyMiddleware(sagaMiddleware)));
export default store;
sagaMiddleware.run(rootWatcher);