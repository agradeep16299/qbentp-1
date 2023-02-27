import React, { useRef } from "react";
import { useFormik } from "formik";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { classNames } from "primereact/utils";
import { Dropdown } from 'primereact/dropdown';
import { states } from "../../../shared/data";
import { InstitutionService } from "../../../services/InstitutionService";
import { Toast } from "primereact/toast";

const BasicDetails = (props) => {
	const toastTL = useRef(null);
	const institutionService = new InstitutionService()
	const formik = useFormik({
		initialValues: {
			name: "",
			type: "",
			alias: "",
			currency: "",
			addressLine1: "",
			addressLine2: "",
			addressLine3: "",
			city: "",
			state: null,
			zipCode: "",
		},
		validate: (data) => {
			let errors = {};

			if (!data.name) {
				errors.name = "Name is required."
			}
			if (!data.type) {
				errors.type = "Type is required"
			}
			if (!data.alias) {
				errors.alias = "alias is required"
			}
			if (!data.currency) {
				errors.currency = "Currency is required"
			}
			if (!data.addressLine1) {
				errors.addressLine1 = "Address Line 1 is required "
			}
			if (!data.city) {
				errors.city = "City is required "
			}
			if (!data.state) {
				errors.state = "State is required "
			}
			if (!data.zipCode) {
				errors.zipCode = "Zipcode is required "
			}


			return errors;
		},

		onSubmit: (data) => {
			let requestBody = {
				"type": data.type,
				"name": data.name,
				"currency": data.currency,
				"alias": data.alias,
				"addressLine1": data.addressLine1,
				"addressLine2": data.addressLine2,
				"addressLine3": data.addressLine3,
				"city": data.city,
				"state": data.state.name,
				"zipcode": data.zipCode,

			};
			console.log(requestBody);
			props.handelStages();
			formik.resetForm();
		},
	});

	{/*
			institutionService.addGeneralInstitution(requestBody).then(res => {
				//console.log(res)
				if(res){
                    props.handelStages();
				}
				
			}).catch((e) => {
				toastTL.current.show({
					severity: "error",
					detail: e.message,
					style: { color: "#000000" },
					life: 3000,
				});
			});
			formik.resetForm();
		},
	});*/}



	const isFormFieldValid = (name) =>
		!!(formik.touched[name] && formik.errors[name]);
	const getFormErrorMessage = (name) => {
		return (
			isFormFieldValid(name) && (
				<small className="p-error">{formik.errors[name]}</small>
			)
		);
	};

	return (
		<div className="col-12" >
			<Toast ref={toastTL} position="top-left" />
			<div className="card form-grid pl-6 pr-6 pt-5 pb-5 generalbgbox">

				<form onSubmit={formik.handleSubmit} className="p-fluid grid">
					<div className="field col-12 md:col-6 lg:col-4">
						<label
							htmlFor="name"
							className={classNames({
								"p-error": isFormFieldValid("name"),
							})}
						>
							Name*
						</label>
						<InputText
							id="name"
							name="name"
							value={formik.values.name}
							onChange={formik.handleChange}
							autoFocus
							className={classNames({
								"p-invalid": isFormFieldValid("name"),
							})}
						/>
						{getFormErrorMessage("name")}
					</div>
					<div className="field col-12 md:col-6 lg:col-4">
						<label
							htmlFor="type"
							className={classNames({
								"p-error": isFormFieldValid("type"),
							})}
						>
							Type*
						</label>
						<InputText
							id="type"
							name="type"
							value={formik.values.type}
							onChange={formik.handleChange}
							autoFocus
							className={classNames({
								"p-invalid": isFormFieldValid("type"),
							})}
						/>
						{getFormErrorMessage("type")}
					</div>
					<div className="field col-12 md:col-6 lg:col-4">
						<label
							htmlFor="alias"
							className={classNames({
								"p-error": isFormFieldValid("alias"),
							})}
						>
							Alias*
						</label>
						<InputText
							id="alias"
							name="alias"
							value={formik.values.alias}
							onChange={formik.handleChange}
							autoFocus
							className={classNames({
								"p-invalid": isFormFieldValid("alias"),
							})}
						/>
						{getFormErrorMessage("alias")}
					</div>
					<div className="field col-12 md:col-6 lg:col-4">
						<label
							htmlFor="currency"
							className={classNames({
								"p-error": isFormFieldValid("currency"),
							})}
						>
							Currency*
						</label>
						<InputText
							id="currency"
							name="currency"
							value={formik.values.currency}
							onChange={formik.handleChange}
							autoFocus
							className={classNames({
								"p-invalid": isFormFieldValid("currency"),
							})}
						/>
						{getFormErrorMessage("currency")}
					</div>
					<div className="field col-12 md:col-6 lg:col-4">
						<label
							htmlFor="addressLine1"
							className={classNames({
								"p-error": isFormFieldValid("addressLine1"),
							})}
						>
							Address Line 1*
						</label>
						<InputText
							id="addressLine1"
							name="addressLine1"
							value={formik.values.addressLine1}
							onChange={formik.handleChange}
							autoFocus
							className={classNames({
								"p-invalid": isFormFieldValid("addressLine1"),
							})}
						/>
						{getFormErrorMessage("addressLine1")}
					</div>
					<div className="field col-12 md:col-6 lg:col-4">
						<label
							htmlFor="addressLine2"
							className={classNames({
								"p-error": isFormFieldValid("addressLine2"),
							})}
						>
							Address Line 2
						</label>
						<InputText
							id="addressLine2"
							name="addressLine2"
							value={formik.values.addressLine2}
							onChange={formik.handleChange}
							autoFocus
							className={classNames({
								"p-invalid": isFormFieldValid("addressLine2"),
							})}
						/>
						{getFormErrorMessage("addressLine2")}
					</div>
					<div className="field col-12 md:col-6 lg:col-4">
						<label
							htmlFor="addressLine3"
							className={classNames({
								"p-error": isFormFieldValid("addressLine3"),
							})}
						>
							Address Line 3
						</label>
						<InputText
							id="addressLine3"
							name="addressLine3"
							value={formik.values.addressLine3}
							onChange={formik.handleChange}
							autoFocus
							className={classNames({
								"p-invalid": isFormFieldValid("addressLine3"),
							})}
						/>
						{getFormErrorMessage("addressLine3")}
					</div>
					<div className="field col-12 md:col-6 lg:col-4">
						<label
							htmlFor="state"
							className={classNames({
								"p-error": isFormFieldValid("state"),
							})}
						>
							State*
						</label>
						<Dropdown
							id="state"
							name="state"
							value={formik.values.state}
							onChange={formik.handleChange}
							options={states}
							optionLabel="name"
						/>
						{getFormErrorMessage("state")}
					</div>
					<div className="field col-12 md:col-6 lg:col-4">
						<label
							htmlFor="city"
							className={classNames({
								"p-error": isFormFieldValid("city"),
							})}
						>
							City*
						</label>
						<InputText
							id="city"
							name="city"
							value={formik.values.city}
							onChange={formik.handleChange}
							autoFocus
							className={classNames({
								"p-invalid": isFormFieldValid("city"),
							})}
						/>
						{getFormErrorMessage("city")}
					</div>

					<div className="field col-12 md:col-6 lg:col-4">
						<label
							htmlFor="zipCode"
							className={classNames({
								"p-error": isFormFieldValid("zipCode"),
							})}
						>
							zip Code*
						</label>
						<InputText
							id="zipCode"
							name="zipCode"
							value={formik.values.zipCode}
							onChange={formik.handleChange}
							autoFocus
							className={classNames({
								"p-invalid": isFormFieldValid("zipCode"),
							})}
						/>
						{getFormErrorMessage("zipCode")}
					</div>

					{/*<Button type="submit" label="Submit" className="mt-2" />*/}
					<div className="flex justify-content-end align-items-center w-full">
						<div className="col-12 md:col-3 lg:col-3 mt-3 flex">
							<Button type="cancel" label="Cancel" className="p-button-danger mr-2" style={{ borderRadius: "6px", width: "10rem" }} />
							<Button type="submit" label="Save & next" style={{ borderRadius: "6px" }} />
						</div>
					</div>

				</form>
			</div>
		</div>
	);
};

export default BasicDetails;
