import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk"
import { authReducer } from "./reducers/auth-reducer";
import { profileReducer } from "./reducers/profile-reducer";

let reducers = combineReducers({
	auth: authReducer,
	profilePage: profileReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));
 
window.store = store;
