import { profileAPI } from "../../api/api";

const SWITCH_IS_FETCHING = "users/SWITCH_IS_FETCHING";
const SET_USER_PROFILE = "profile/SET_USER_PROFILE";

let initialState = {
	usersData: null,
	isFetching: false,
};

export const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_PROFILE: {
			return {
				...state,
				usersData: action.usersData,
			};
		}
		case SWITCH_IS_FETCHING: {
			return {
				...state,
				isFetching: action.isFetching
			}
		}

		default:
			return state;
	}
};

//action creators:
export const setFetching = (isFetching) => ({ type: SWITCH_IS_FETCHING, isFetching });
export const setUserProfile = (usersData) => ({ type: SET_USER_PROFILE, usersData });

//thunk creators:
export const getUserProfile = (userId) => async (dispatch) => {
	dispatch(setFetching(true));
	let data = await profileAPI.getUserProfile(userId);
	dispatch(setFetching(false));
	dispatch(setUserProfile(data));
}
export const saveProfile = (usersData, setEditMode) => async (dispatch, getState) => {
	const userId = getState().auth.userId;
	let data = await profileAPI.updateProfile(usersData);
	debugger
	dispatch(getUserProfile(userId));
	setEditMode(false);
};
