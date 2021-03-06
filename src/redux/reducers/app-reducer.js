import { getAuthUserData } from "./auth-reducer";

const INITIALIZED_SUCCESS = 'app/INITIALIZED_SUCCESS';

let initialState = {
	initialized: false,
}

export const appReducer = (state=initialState, action) => {
	switch (action.type) {
		case INITIALIZED_SUCCESS: 
			return {
				...state,
				initialized: true
			};

		default:
			return state;
	}
}

//Actions Creators:
export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS})

//Thunk Creators:
export const initializeApp = () => async (dispatch) => {
	await dispatch(getAuthUserData())
	dispatch(initializedSuccess())
} 

