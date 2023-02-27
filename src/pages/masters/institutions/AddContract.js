import React, { useState, useRef } from "react";
import { useFormik } from "formik";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { classNames } from "primereact/utils";
import { Calendar } from "primereact/calendar";
import { Toast } from 'primereact/toast';
import { FileUpload } from 'primereact/fileupload';
import { BiUpload } from "react-icons/bi"
const initialValues = {
	contacts: [
		{
			startDate: "",
			endDate: "",
			uploadDoc: "",
		}
	]
};
const AddContract = (props) => {
	const [startDate, setStartDate] = useState(null);
	const [endDate, setEndDate] = useState(null);
	const formik = useFormik({
		initialValues: { initialValues },

		validate: (data) => {
			let errors = {};

			if (!data.startDate) {
				errors.startDate = "Start Date required.";
			}
			if (!data.endDate) {
				errors.endDate = "End Date required"
			}
			if (!data.uploadDoc) {
				errors.uploadDoc = "Upload Document  is required"
			}

			return errors;
		},

		onSubmit: (data) => {
			console.log(data);
			props.handelStages();
			formik.resetForm();
		},
	});
	const toast = useRef(null);
	const uploadButton = () => {
		return (
			<button>
				<BiUpload />
			</button>
		)
	}

	const onUpload = () => {
		toast.current.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
	};
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
			<div className="card form-grid">

				<form onSubmit={formik.handleSubmit} className="p-fluid grid">
					<div className="field col-12 md:col-6 lg:col-4">
						<label
							htmlFor="startDate"
							className={classNames({
								"p-error": isFormFieldValid("startDate"),
							})}
						>
							Start Date*
						</label>
						<Calendar value={startDate} onChange={(e) => setStartDate(e.value)} showIcon />
						{getFormErrorMessage("startDate")}
					</div>
					<div className="field col-12 md:col-6 lg:col-4">
						<label
							htmlFor="endDate"
							className={classNames({
								"p-error": isFormFieldValid("endDate"),
							})}
						>
							End Date*
						</label>
						<Calendar value={endDate} onChange={(e) => setEndDate(e.value)} showIcon />
						{getFormErrorMessage("endDate")}
					</div>
					<div className="field col-12 md:col-6 lg:col-4">
						<label
							htmlFor="uploadDoc"
							className={classNames({
								"p-error": isFormFieldValid("uploadDoc"),
							})}
						>
							Upload Document*
						</label>
						<div className="card flex justify-content-center">
							<input style={{ width: "18rem" }} placeholder="upload file" />
							<FileUpload mode="basic" name="demo[]" url="/api/upload" accept="image/*" maxFileSize={1000000} onUpload={onUpload} chooseLabel={uploadButton} />
						</div>
						{getFormErrorMessage("uploadDoc")}
					</div>
					<div className="flex mt-3 " >
						<Button style={{ bordeRadius: "10px" }} type="cancel" label="Cancel" className="p-button-danger" />
						<Button type="submit" label="Save&next" />
					</div>
				</form>

				{/*<Button type="submit" label="Submit" className="mt-2" />*/}


			</div>
		</div>
	)
};
export default AddContract;