import axios from "axios";
import { agent_end_point_url } from "../shared/constant";

export class AgentService {
	constructor() {
		this.token = sessionStorage.getItem("token");
		this.headers = {
			"Content-Type": "application/json",
			Authorization: `Bearer ${this.token}`,
		};
	}

	// Get Agents & Profile according to payload
	// @method: POST
	getAgentsProfiles = async (payload) => {
		try {
			const response = await axios.post(
				agent_end_point_url + "/profile/search",
				payload,
				{ headers: this.headers }
			);
			return response.data;
		} catch (error) {
			throw new Error(error.message);
		}
	};

	getProfileDetails = async (id) => {
		try {
			const response = await axios.get(
				agent_end_point_url + "/profile/" + id,
				{ headers: this.headers }
			);
			return response.data;
		} catch (error) {
			throw new Error(error.message);
		}
	};

	agentProfileStatusChange = async (payload) => {
		try {
			const response = await axios.post(
				agent_end_point_url + "/profile/verification",
				payload,
				{ headers: this.headers }
			);
			return response.data;
		} catch (error) {
			throw new Error(error.message);
		}
	};
}
