const ADD_PROJECT = 'profile/ADD_PROJECT';

let initialState = {
	projectsData: [
		{
			id: 1,
			projectName: "Название проекта",
			creatorName: "Иванов Бильбо Бегинс",
			projectDesc: "Описание крутого проекта, в который необходимо...",
			requiredAmount: 20000,
			collectedAmount: 0
		},
		{
			id: 2,
			projectName: "Очень крутой проект",
			creatorName: "Польчиков Джимми Нейтрон",
			projectDesc: "Описание крутого проекта, в который необходимо...",
			requiredAmount: 30000,
			collectedAmount: 10000
		},

	]
}

export const profileReduser = (state=initialState, action) => {
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
		default:
			return state;
	}
 }

export const addProject = (newProject) => ({type: ADD_PROJECT, newProject})