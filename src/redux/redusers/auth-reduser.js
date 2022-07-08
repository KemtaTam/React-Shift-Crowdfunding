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

 export const getPosts = () => async (dispatch) => {
	testAPI.getPosts();
}
 export const addPosts = () => async (dispatch) => {
	const data = await testAPI.addPosts();
	debugger
}
