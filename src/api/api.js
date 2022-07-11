import axios from "axios";

const instance = axios.create({
	withCredentials: true,
	baseURL: "http://localhost:3001/",
})

export const usersAPI = {
	addUser(user) {
		return instance.post(`users`, user)
			.then(response => response.data)
	},
	addProject(project) {
		return instance.post(`projects`, project)
			.then(response => response.data)
	},
	getProjects() {
		return instance.get(`projects`)
			.then(response => response.data)
	}
}