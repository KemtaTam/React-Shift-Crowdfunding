import { projectsAPI } from "../../api/api";

const ADD_PROJECT = 'project/ADD_PROJECT';
const SET_PROJECTS = 'project/SET_PROJECTS';
const CHANGE_LIKES_COUNT = 'project/CHANGE_LIKES_COUNT';
const PROJECT_CLEAR = 'project/PROJECT_CLEAR'
const SWITCH_IS_FETCHING = 'users/SWITCH_IS_FETCHING';

let initialState = {
	projectsData: [ 	//здесь проинициализированы данные, чтобы видно было что-то без запуска сервера
		/* {
			id: 1000,
			projectName: "Крутой проект",
			projectDesc: "Описание крутого проекта, в который необходимо. Описание крутого проекта, в который необходимо. Описание крутого проекта, в который необходимо.",
			requiredAmount: 20000,
			collectedAmount: 10000,
			creatorName: "Иванов Бильбо Бегинс",
			likesCount: 20,
			likeFlag: false
		},
		{
			id: 1001,
			projectName: "Не крутой проект",
			projectDesc: "Описание не крутого проекта, в который необходимо пожертвовать свою квартиру!",
			requiredAmount: 10000,
			collectedAmount: 1234,
			creatorName: "Иванов Бильбо Бегинс",
			likesCount: 228,
			likeFlag: true
		} */
	],
	isFetching: false,
}

export const projectReducer = (state=initialState, action) => {
	switch (action.type) {
		case ADD_PROJECT: {
			let len = state.projectsData.length + 1;	
			return {
				...state,
				projectsData: [...state.projectsData, {...action.newProject, id: len, likesCount: 0, likeFlag: false}],
			};
		}
		case SET_PROJECTS: {	
			debugger
			return {
				...state,
				projectsData: action.projectsData /* [...state.projectsData,  ...action.projectsData] */,	
			};
		}
		case CHANGE_LIKES_COUNT: {
			return {
				...state, 
				projectsData: state.projectsData.map(project => {
					if(project.id === action.id){
						return !project.likeFlag ? 
							{...project, likesCount: ++project.likesCount, likeFlag: true} : 
							{...project, likesCount: --project.likesCount, likeFlag: false}
					}
					return project;
				})
			};	
		}
		case PROJECT_CLEAR: {	//чтобы при переходе от общих проектов к своим, общие не отображались
			return {
				...state, 
				projectsData: []
			};	
		}
		case SWITCH_IS_FETCHING: {
			return {...state, isFetching: action.isFetching}
		}

		default:
			return state;
	}
 }

 //action creators:
export const addProject = (newProject) => ({type: ADD_PROJECT, newProject})
export const setProjects = (projectsData) => ({type: SET_PROJECTS, projectsData})
export const changeLikesCount = (id) => ({type: CHANGE_LIKES_COUNT, id})
export const projectClear = () => ({type: PROJECT_CLEAR})
export const setFetching = (isFetching) => ({type: SWITCH_IS_FETCHING, isFetching})

//thunk creators:
export const addProjectTC = (newProject) => async (dispatch) => {
	dispatch(setFetching(true));
	dispatch(addProject(newProject));
	projectsAPI.addProject(newProject);
	dispatch(setFetching(false));
}
export const getProjectsTC = () => async (dispatch) => {
	dispatch(setFetching(true));
	const data = await projectsAPI.getProjects();
	dispatch(setProjects(data))
	dispatch(setFetching(false));
}
export const getMyProjectsTC = (userId) => async (dispatch) => {
	dispatch(setFetching(true));
	const data = await projectsAPI.getMyProjects(userId);
	debugger
	dispatch(setProjects(data))
/* 	dispatch(setProjects(data.items)) */		/* ////////////////////////////////////////////////////// */
	dispatch(setFetching(false));
}
export const getSomeProjectTC = (id) => async (dispatch) => {
	dispatch(setFetching(true));
	const data = await projectsAPI.getSomeProject(id);
	dispatch(setProjects(data))
	dispatch(setFetching(false));
}