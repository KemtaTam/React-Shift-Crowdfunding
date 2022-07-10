import { testAPI } from "../../api/api";

let initialState = {
	userId: null,
	email: null,
	login: null,
	isAuth: false,
}

export const authReducer = (state=initialState, action) => {
	return state
 }


 //thunk creators
 export const addUser = (user) => async (dispatch) => {
	testAPI.addUser(user);
}
