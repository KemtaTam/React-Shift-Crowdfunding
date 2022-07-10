import axios from "axios";

const instance = axios.create({
	withCredentials: true,
	baseURL: "http://localhost:3001/",
})

export const testAPI = {
	addUser(user) {
		return instance.post(`users`, user)
			.then(response => response.data)
	}
}