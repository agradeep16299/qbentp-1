import axios from "axios";
import { apiPath, superadminApiPath } from "../shared/constant";

export class AuthService {
	constructor() {
		this.headers = {
			"Content-Type": "application/json",
		};
	}

	// Login function
	// @method: POST
	login = async ({ username, password }) => {
		let payload = {
			username: username,
			password: password,
		};
		try {
			const response = await axios.post(
				apiPath + "/authenticate",
				payload,
				{ headers: this.headers }
			);
			return response.data;
		} catch (error) {
			throw new Error(error.message);
		}
	};

	// Login function
	// @method: POST
	superLogin = async ({ username, password }) => {
		let payload = {
			username: username,
			password: password,
		};
		try {
			const response = await axios.post(
				superadminApiPath + "/authenticate",
				payload,
				{ headers: this.headers }
			);
			return response.data;
		} catch (error) {
			throw new Error(error.message);
		}
	};
}
