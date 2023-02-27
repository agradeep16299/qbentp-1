import axios from "axios";
import { apiPath } from "../shared/constant";

export class InstitutionService {
	constructor() {
		this.token = sessionStorage.getItem("token");
		this.headers = {
			"Content-Type": "application/json",
			Authorization: `Bearer ${this.token}`,
		};
	}
	//Get Institution
	//@method: POST
	getInstitution = async (payload) => {
		try {
			const response = await axios.post(
				apiPath + "/institution/svc/search",
				payload,
				{ headers: this.headers }
			);
			return response.data;
		} catch (error) {
			throw new Error(error.message);
		}
	};
	addGeneralInstitution=async(payload)=>{
		try {
			const response=await axios.post(apiPath+"/institution/svc/create",
			payload,
			{headers:this.headers}
			);
			return response.data;
		} catch (error) {
			throw new Error(error.message)
		}
	};
	addInstitutionContact=async(payload)=>{
		try {
			const response=await axios.post(apiPath+"/institution/svc/contact/create",
			payload,
			{headers:this.headers}
			);
			return response.data;
		} catch (error) {
			throw new Error(error.message)
		}
	}
};
