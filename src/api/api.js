import axios from "axios";

const instance = axios.create({
	withCredentials: true,
	baseURL: "http://localhost:3001/",
	headers: {
		"API-KEY": "2019eb16-0817-4258-bdcb-a32b5b78bc88"
	} 
})

export const testAPI = {
	addUser(user) {
		return instance.post(`users`, user)
			.then(response => response.data)
	}
}