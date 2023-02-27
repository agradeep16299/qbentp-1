import React,{useRef} from "react";
import { useFormik } from "formik";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { classNames } from "primereact/utils";
import { InstitutionService } from "../../../services/InstitutionService";
import { Toast } from "primereact/toast";
const initialValues = {
	contacts: [
		{
			name: "",
			mobile: "",
			email: "",
		}
	]
};

const AddContact = (props) => {
	const toastTL = useRef(null);
  const institutionService=new InstitutionService()
	const formik = useFormik({
		initialValues: { initialValues },
		validate: (data) => {
			let errors = {};

			if (!data.name) {
				errors.name = "Name is required.";
			}
			if (!data.mobile) {
				errors.mobile = "Mobile No is required"
			}
			if (!data.email) {
				errors.email = "Email is required"
			}

			return errors;
		},

		onSubmit: (data) => {
			let requestBody =[
				{
					"name": data.name,
					"mobile":data.mobile,
					"email":data.email,
				},
			];
			institutionService.addInstitutionContact(requestBody).then(res => {
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
		
		}
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
		<div className="col-12">
			<Toast ref={toastTL} position="top-left" />
			<div className="card form-grid  pl-6 pr-6 pt-5 pb-5 generalbgbox">

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
							htmlFor="mobile"
							className={classNames({
								"p-error": isFormFieldValid("mobile"),
							})}
						>
							Mobile*
						</label>
						<InputText
							id="mobile"
							name="mobile"
							value={formik.values.mobile}
							onChange={formik.handleChange}
							autoFocus
							className={classNames({
								"p-invalid": isFormFieldValid("mobile"),
							})}
						/>
						{getFormErrorMessage("mobile")}
					</div>
					<div className="field col-12 md:col-6 lg:col-4">
						<label
							htmlFor="email"
							className={classNames({
								"p-error": isFormFieldValid("email"),
							})}
						>
							Email*
						</label>
						<InputText
							id="email"
							name="email"
							value={formik.values.email}
							onChange={formik.handleChange}
							autoFocus
							className={classNames({
								"p-invalid": isFormFieldValid("email"),
							})}
						/>
						{getFormErrorMessage("email")}
					</div>


					<div className="flex justify-content-end align-items-center w-full">
						<div className="col-12 md:col-3 lg:col-3 mt-3 flex">
							<Button type="cancel" label="Cancel" className="p-button-danger mr-2" style={{ borderRadius: "6px", width: "10rem" }} />
							<Button type="submit" label="Save & next" style={{ borderRadius: "6px" }} />
						</div>
					</div>
				</form>

				{/*<Button type="submit" label="Submit" className="mt-2" />*/}
			</div>
		</div>
	)
};
export default AddContact;
{/*
import React from "react";

import { Formik, Field, Form, ErrorMessage, FieldArray } from "formik";

const initialValues = {
	friends: [
		{
			name: "",
			mobile: "",
			email: "",
		}
	]
};

const AddContact = () => (
	<div>
		
		<Formik
			initialValues={initialValues}
			onSubmit={async (values) => {
				await new Promise((r) => setTimeout(r, 500));
				alert(JSON.stringify(values, null, 2));
			}}
		>
			{({ values }) => (
				<Form>
					<FieldArray name="friends">
						{({ insert, remove, push }) => (
							<div  className="card form-grid">
								{values.friends.length > 0 &&
									values.friends.map((friend, index) => (
										<div className="row" key={index}>
											<div className="col">
												<label htmlFor={`friends.${index}.name`}>Name</label>
												<Field
													name={`friends.${index}.name`}
													placeholder="Jane Doe"
													type="text"
												/>
												<ErrorMessage
													name={`friends.${index}.name`}
													component="div"
													className="field-error"
												/>
											</div>
											<div className="col">
												<label htmlFor={`friends.${index}.email`}>Email</label>
												<Field
													name={`friends.${index}.email`}
													placeholder="jane@acme.com"
													type="email"
												/>
												<ErrorMessage
													name={`friends.${index}.name`}
													component="div"
													className="field-error"
												/>
											</div>
											<div className="col">
												<button
													type="button"
													className="secondary"
													onClick={() => remove(index)}
												>
													X
												</button>
											</div>
										</div>
									))}
								<button
									type="button"
									className="secondary"
									onClick={() => push({ name: "", email: "" })}
								>
									Add Friend
								</button>
							</div>
						)}
					</FieldArray>

				</Form>
			)}
		</Formik>
	</div>
);

export default AddContact;
									*/}