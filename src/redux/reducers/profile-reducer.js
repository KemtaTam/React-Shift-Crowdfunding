import { usersAPI } from "../../api/api";

const ADD_PROJECT = 'profile/ADD_PROJECT';
const SET_PROJECTS = 'profile/SET_PROJECTS';

let initialState = {
	projectsData: [ 	//здесь проинициализированы данные, чтобы видно было что-то без запуска сервера
		{
			id: 1000,
			projectName: "Крутой проект",
			projectDesc: "Описание крутого проекта, в который необходимо...",
			requiredAmount: 20000,
			collectedAmount: 10000,
			creatorName: "Иванов Бильбо Бегинс",
		},
		{
			id: 1001,
			projectName: "Не крутой проект",
			projectDesc: "Описание не крутого проекта, в который необходимо...",
			requiredAmount: 10000,
			collectedAmount: 1234,
			creatorName: "Иванов Бильбо Бегинс",
		}
	],
}

export const profileReducer = (state=initialState, action) => {
	switch (action.type) {
		case ADD_PROJECT: {
			let len = state.projectsData.length + 1;	
			return {
				...state,
				projectsData: [...state.projectsData, {id: len, 
					projectName: action.newProject.projectName,
					creatorName: action.newProject.creatorName,
					projectDesc: action.newProject.projectDesc,
					requiredAmount: action.newProject.requiredAmount,
					collectedAmount: action.newProject.collectedAmount,
				}],
			};
		}
		case SET_PROJECTS: {	
			console.log('asdasd');
			debugger
			return {
				...state,
				projectsData: [...state.projectsData,  ...action.projectsData],		//берем инициализационные данные и прибавляем к ним данные сервера
			};
		}
		default:
			return state;
	}
 }

 //action creators:
export const addProject = (newProject) => ({type: ADD_PROJECT, newProject})
export const setProjects = (projectsData) => ({type: SET_PROJECTS, projectsData})

//thunk creators:
export const addProjectTC = (newProject) => async (dispatch) => {
	dispatch(addProject(newProject));
	usersAPI.addProject(newProject);
}
export const getProjectsTC = () => async (dispatch) => {
	const data = await usersAPI.getProjects();
	dispatch(setProjects(data))
}