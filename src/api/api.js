import axios from "axios";

const instance = axios.create({
	withCredentials: true,
	baseURL: "http://localhost:3001/",
	headers: {
		'Content-Type': 'application/json',
		'accept': "*/*"
	}
})

// https://crowdfunding-platform-backend.herokuapp.com/
//http://localhost:3001/

export const authAPI = {
	register(user) {
		return instance.post(`register`, user)
			.then(response => {
				return response.data
				debugger
			})
	},
	login(data){
		return instance.post(`login`, data)
				.then(response => response.data)
	},
	/* logout(){
		return instance.delete(`auth/login`)
				.then(response => response.data)
	} */
}

export const projectsAPI = {
	addProject(project) {
		return instance.post(`projects`, project)
			.then(response => response.data)
	},
	getProjects() {
		return instance.get(`projects`)
			.then(response => response.data)
	},
	getMyProjects(userId) {
		return instance.get(`projects?userId=${userId}`)
			.then(response => response.data)
	}
}