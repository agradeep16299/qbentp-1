import axios from "axios";
import { apiPath, superadminApiPath } from "../shared/constant";

export class ProductService {
	constructor() {
		this.token = sessionStorage.getItem("token");
		this.supertoken = sessionStorage.getItem("supertoken");
		this.headers = {
			"Content-Type": "application/json",
			Authorization: `Bearer ${this.token}`,
		};
		this.superHeaders = {
			"Content-Type": "application/json",
			Authorization: `Bearer ${this.supertoken}`,
		};
	}

	// Get Products according to payload
	// @method: POST
	getSuperProducts = async (payload) => {
		try {
			const response = await axios.post(
				superadminApiPath + "/super/admin/svc/product/search",
				payload,
				{ headers: this.superHeaders }
			);
			return response.data;
		} catch (error) {
			throw new Error(error.message);
		}
	};

	// Get Products according to payload
	// @method: POST
	getProducts = async (payload) => {
		try {
			const response = await axios.post(
				apiPath + "/master/svc/product/search",
				payload,
				{ headers: this.headers }
			);
			return response.data;
		} catch (error) {
			throw new Error(error.message);
		}
	};

	// Add products to country
	//@method: POST
	addProducts = async (payload) => {
		try {
			const response = await axios.post(
				apiPath + "/master/svc/product/create",
				payload,
				{ headers: this.headers }
			);
			return response.data;
		} catch (error) {
			throw new Error(error.message);
		}
	};

	// Update products to country
	//@method: POST
	updateProduct = async (payload) => {
		try {
			const response = await axios.post(
				apiPath + "/master/svc/product/update",
				payload,
				{ headers: this.headers }
			);
			return response.data;
		} catch (error) {
			throw new Error(error.response.data.message);
		}
	};

	//All Products that already added
	//@method: GEt
	getAllPreviousProducts = async () => {
		try {
			const response = await axios.get(
				apiPath + "/master/svc/product/all",
				{ headers: this.headers }
			);
			return response.data;
		} catch (error) {
			throw new Error(error.response.data.message);
		}
	};
}
