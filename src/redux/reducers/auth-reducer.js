import { usersAPI } from "../../api/api";

const SET_USER_DATA = 'auth/SET_USER_DATA';

let initialState = {
	userId: null,
	email: null,
	name: "Иванов Бильбо Бегинс",
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
	// здесь должно быть обращение к серверу
	dispatch(setAuthUserData(null, null, initialState.name, true));		//временно
}
 export const addUser = (user) => async (dispatch) => {
	usersAPI.addUser(user);
}
