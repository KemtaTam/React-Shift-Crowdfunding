import axios from "axios";

const instance = axios.create({
	withCredentials: true,
	baseURL: "http://localhost:3001/",
	headers: {
		"Authorization": "Bearer=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhYUBtYWlsLnJ1IiwiYXV0aG9yaXRpZXMiOltdLCJpYXQiOjE2NTc4MDg2OTcsImV4cCI6MTY1ODM2MTYwMH0.Ml8XY2Uk0inRC3q32ICVNcgu51KEivaU00oA_68O0Js"
	}
})

// https://crowdfunding-platform-backend.herokuapp.com/
//http://localhost:3001/

export const authAPI = {
	register(user) {
		return instance.post(`register`, user)
			.then(response => {
				return response.data
			})
	},
	login(data){
		return instance.post(`login`, data)
				/* .then(response => response.data) */
				.then(response => response)
	}
}

export const projectsAPI = {
	addProject(project) {
		debugger
		return instance.post(`projects`, project)	//******************************** */
			.then(response => response.data)
	},
	getProjects() {
		return instance.get(`projects`)
			.then(response => response.data)
	},
	getMyProjects(userId) {
		return instance.get(`projects?userId=${userId}`)
			.then(response => response.data)
	},
	getSomeProject(id) {
		return instance.get(`projects?id=${id}`)
			.then(response => response.data)
	}
}