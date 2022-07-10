import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk"
import { authReducer } from "./redusers/auth-reduser";
import { profileReduser } from "./redusers/profile-reduser";

let reducers = combineReducers({
	auth: authReducer,
	profilePage: profileReduser
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));
 
window.store = store;

export default store;