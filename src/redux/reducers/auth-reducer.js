import { authAPI } from "../../api/api";

const SET_USER_DATA = 'auth/SET_USER_DATA';

let initialState = {
	userId: null,
	email: null,
	name: null,
	isAuth: false,
}

export const authReducer = (state=initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA: {
			return {
				...state,
				...action.payload,
			};
		}

		default:
			return state;
	}
 }

//action creators
export const setAuthUserData = (userId, email, name, isAuth) => ({
	type: SET_USER_DATA, 
	payload: {userId, email, name, isAuth}
})
//thunk creators
export const getAuthUserData = () => async (dispatch) => {	
	let id = localStorage.getItem("id");				// здесь должно быть обращение к серверу	
	let name = localStorage.getItem("name");
	let email = localStorage.getItem("email");
	id && name && email && dispatch(setAuthUserData(id, email, name, true));	
}
export const register = (user) => async (dispatch) => {
	let data = await authAPI.register(user);
	let {id, email, name} = data.user;
	localStorage.setItem("name", name);
	localStorage.setItem("id", id);
	localStorage.setItem("email", email);
	dispatch(setAuthUserData(id, email, name, true));
}
export const login = (user) => async (dispatch) => {
	const data = await authAPI.login(user);
	let {id, email, name} = data.user;
	localStorage.setItem("name", name);
	localStorage.setItem("id", id);
	localStorage.setItem("email", email);
	dispatch(setAuthUserData(id, email, name, true));
}
export const logout = () => async (dispatch) => {
	localStorage.removeItem("name");
	localStorage.removeItem("id");
	localStorage.removeItem("email");
	dispatch(setAuthUserData(null, null, null, false));
}
