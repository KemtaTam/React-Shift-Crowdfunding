import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk"
import { appReducer } from "./reducers/app-reducer";
import { authReducer } from "./reducers/auth-reducer";
import { projectReducer } from "./reducers/project-reducer";

let reducers = combineReducers({
	auth: authReducer,
	project: projectReducer,
	app: appReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));
 
window.store = store;
