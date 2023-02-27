import React, { useRef } from "react";
import { useFormik } from "formik";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { classNames } from "primereact/utils";
import { Dropdown } from 'primereact/dropdown';
import { Toast } from "primereact/toast";
import { Calendar } from "primereact/calendar";

const dropdown = [
	{ name: "a", code: "a" },
	{ name: "b", code: "b" },
	{ name: "c", code: "c" },
	{ name: "d", code: "d" },
]
const SearchToggleContent = (props) => {
	const toastTL = useRef(null);

	const formik = useFormik({
		initialValues: {
			firstName: "",
			lastName: "",
			pin: "",
			mobileNo: "",
			status: "",
			alocated: "",
			submissionStart: "",
			submissionEnd: "",
			product: "",
			subProduct: "",
		},
		validate: (data) => {
			let errors = {};
			{/*
			if (!data.firstName) {
				errors.firstName = "first name is required."
			}
			if (!data.lastName) {
				errors.lastName = "last name is required"
			}
			if (!data.pin) {
				errors.pin = "pin code is required"
			}
			if (!data.mobileNo) {
				errors.mobileNo = "mobile no is required"
			}
			if (!data.status) {
				errors.status = "status is required "
			}
			if (!data.alocated) {
				errors.alocated = "alocated is required "
			}
			if (!data.submissionStart) {
				errors.submissionStart= "submission start is required "
			}
			if (!data.submissionEnd) {
				errors.submissionEnd = "submission end is required "
			}
            if (!data.product) {
				errors.product = "prodict is required "
			}
            if (!data.subProduct) {
				errors.subProduct = "sub product is required"
			}
		*/}

			return errors;
		},

		onSubmit: (data) => {
			let requestBody = {
				"firstName": data.firstName,
				"lastName": data.lastName,
				"pin": data.pin,
				"moileNo": data.mobileNo,
				"status": data.status,
				"alocated": data.alocated,
				"submissionStart": data.submissionStart,
				"submissionEnd": data.submissionEnd,
				"product": data.product,
				"subProduct": data.subProduct,

			};
			console.log(requestBody);
			formik.resetForm();
		},
	});

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
		<div className="mt-3 mb-3">
			<Toast ref={toastTL} position="top-left" />
			<div className="card form-grid pl-3 pr-3 pt-5 pb-2 generalbgbox2">
				<form className="p-fluid grid" onSubmit={formik.handleSubmit}>
					<div className="field col-12 md:col-3 lg:col-3">
						<label
							htmlFor="name"
							className={classNames({
								"p-error": isFormFieldValid("name"),
							})}
						>
							First Name*
						</label>
						<InputText
							id="firstName"
							name="firstName"
							value={formik.values.firstName}
							onChange={formik.handleChange}
							autoFocus
							className={classNames({
								"p-invalid": isFormFieldValid("firstName"),
							})}
						/>
						{getFormErrorMessage("firstName")}
					</div>
					<div className="field col-12 md:col-3 lg:col-3">
						<label
							htmlFor="lastName"
							className={classNames({
								"p-error": isFormFieldValid("lastName"),
							})}
						>
							Last Name*
						</label>
						<InputText
							id="lastName"
							name="lastName"
							value={formik.values.lastName}
							onChange={formik.handleChange}
							autoFocus
							className={classNames({
								"p-invalid": isFormFieldValid("lastName"),
							})}
						/>
						{getFormErrorMessage("lastName")}
					</div>
					<div className="field col-12 md:col-3 lg:col-3">
						<label
							htmlFor="pin"
							className={classNames({
								"p-error": isFormFieldValid("pin"),
							})}
						>
							Pin Code*
						</label>
						<Dropdown
							id="pin"
							name="pin"
							value={formik.values.pin}
							onChange={formik.handleChange}
							options={dropdown}
							optionLabel="name"
							autoFocus
							className={classNames({
								"p-invalid": isFormFieldValid("pin"),
							})}
						/>
						{getFormErrorMessage("pin")}
					</div>
					<div className="field col-12 md:col-3 lg:col-3">
						<label
							htmlFor="mobileNo"
							className={classNames({
								"p-error": isFormFieldValid("mobileNo"),
							})}
						>
							Mobile No*
						</label>
						<InputText
							id="mobileNo"
							name="mobileNo"
							value={formik.values.mobileNo}
							onChange={formik.handleChange}

							optionLabel="mobileNo"
						/>
						{getFormErrorMessage("mobileNo")}
					</div>
					<div className="field col-12 md:col-3 lg:col-3">
						<label
							htmlFor="status"
							className={classNames({
								"p-error": isFormFieldValid("status"),
							})}
						>
							Status*
						</label>
						<Dropdown
							id="status"
							name="status"
							value={formik.values.status}
							onChange={formik.handleChange}
							options={dropdown}
							optionLabel="name"
							autoFocus
							className={classNames({
								"p-invalid": isFormFieldValid("status"),
							})}
						/>
						{getFormErrorMessage("status")}
					</div>
					<div className="field col-12 md:col-3 lg:col-3">
						<label
							htmlFor="alocated"
							className={classNames({
								"p-error": isFormFieldValid("alocated"),
							})}
						>
							Allocated (Y/N)*
						</label>
						<Dropdown
							id="alocated"
							name="alocated"
							value={formik.values.alocated}
							onChange={formik.handleChange}
							options={dropdown}
							optionLabel="name"
							autoFocus
							className={classNames({
								"p-invalid": isFormFieldValid("alocated"),
							})}
						/>
						{getFormErrorMessage("alocated")}
					</div>
					<div className="field col-12 md:col-3 lg:col-3">
						<label
							htmlFor="submissionStart"
							className={classNames({
								"p-error": isFormFieldValid("submissionStart"),
							})}
						>
							Submission Date (From)
						</label>
						<Calendar
							id="submissionStart"
							name="submissionStart"
							value={formik.values.submissionStart}
							onChange={formik.handleChange}
							autoFocus
							showIcon
							className={classNames({
								"p-invalid": isFormFieldValid("submissionStart"),
							})}
						/>
						{getFormErrorMessage("submissionStart")}
					</div>
					<div className="field col-12 md:col-3 lg:col-3">
						<label
							htmlFor="submissionEnd"
							className={classNames({
								"p-error": isFormFieldValid("submissionEnd"),
							})}
						>
							Submission Date (To)
						</label>
						<Calendar
							id="submissionEnd"
							name="submissionEnd"
							value={formik.values.submissionEnd}
							onChange={formik.handleChange}
							autoFocus
							showIcon
							className={classNames({
								"p-invalid": isFormFieldValid("asubmissionEnd"),
							})}
						/>
						{getFormErrorMessage("submissionEnd")}
					</div>

					<div className="field col-12 md:col-3 lg:col-3">
						<label
							htmlFor="product"
							className={classNames({
								"p-error": isFormFieldValid("product"),
							})}
						>
							Product*
						</label>
						<Dropdown
							id="product"
							name="product"
							value={formik.values.product}
							onChange={formik.handleChange}
							autoFocus
							options={dropdown}
							optionLabel="name"
							className={classNames({
								"p-invalid": isFormFieldValid("product"),
							})}
						/>
						{getFormErrorMessage("product")}
					</div>


					<div className="field col-12 md:col-3 lg:col-3">
						<label
							htmlFor="subProduct"
							className={classNames({
								"p-error": isFormFieldValid("subProduct"),
							})}
						>
							Sub Product*
						</label>
						<Dropdown
							id=""
							name="subProduct"
							value={formik.values.subProduct}
							onChange={formik.handleChange}
							autoFocus
							options={dropdown}
							optionLabel="name"
							className={classNames({
								"p-invalid": isFormFieldValid("subProduct"),
							})}
						/>
						{getFormErrorMessage("subProduct")}
					</div>

					{/*<Button type="submit" label="Submit" className="mt-2" />*/}
					<div className="flex justify-content-end align-items-center w-full">
						<div className="col-12 md:col-3 lg:col-3 mt-0 flex">
							<Button type="cancel" label="Cancel" className="p-button-danger mr-2" style={{ borderRadius: "6px", width: "10rem" }} />
							<Button type="submit" label="Search" style={{ borderRadius: "6px", width: "10rem" }} />
						</div>
					</div>

				</form>
			</div>
		</div>
	);
};

export default SearchToggleContent;
