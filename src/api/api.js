import axios from "axios";

const instance = axios.create({
	withCredentials: true,
	baseURL: "http://localhost:3001/",
	headers: {
		"API-KEY": "2019eb16-0817-4258-bdcb-a32b5b78bc88"
	} 
})

export const testAPI = {
	getPosts() {
		return instance.get(`posts`)
			.then(response => response.data)
	},
	addPosts(id) {
		return instance.post(`posts`, { "id": id, "title": "json-server", "author": "typicode" })
			.then(response => response.data)
	},
	addUser(user) {
		return instance.post(`users`, user)
			.then(response => response.data)
	}
}