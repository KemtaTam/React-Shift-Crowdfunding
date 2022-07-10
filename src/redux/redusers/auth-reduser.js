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
 export const getPosts = () => async (dispatch) => {
	testAPI.getPosts();
}
 export const addPosts = (id) => async (dispatch) => {
	testAPI.addPosts(id);
}
 export const addUser = (user) => async (dispatch) => {
	testAPI.addUser(user);
}
