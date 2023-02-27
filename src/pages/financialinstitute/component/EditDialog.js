import React, { useRef } from "react";
import { useFormik } from "formik";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { classNames } from "primereact/utils";
import { Dropdown } from 'primereact/dropdown';
import { Toast } from "primereact/toast";
const dropdown = [
    { name: "A", code: "a" },
    { name: "B", code: "b" },
    { name: "C", code: "c" },
    { name: "D", code: "d" },
]
const EditDialog = (props) => {
    const toastTL = useRef(null);

    const formik = useFormik({
        initialValues: {
            profession: "",
            yearlyIncome: "",
            age: "",
            companyName: "",
            mediclaimDetails: "",
            puchaseCar: "",
            data1: "",
            data2: "",
            data3: "",

        },
        validate: (data) => {
            let errors = {};

            if (!data.profession) {
                errors.profession = "profession name is required."
            }
            if (!data.yearlyIncome) {
                errors.yearlyIncome = "yearly income is required"
            }
            if (!data.age) {
                errors.age = "pin code is required"
            }
            if (!data.companyName) {
                errors.companyName = "company name is required"
            }
            if (!data.mediclaimDetails) {
                errors.mediclaimDetails = "mediclaimDetails is required "
            }
            if (!data.puchaseCar) {
                errors.puchaseCar = "puchase Car is required "
            }
            if (!data.data1) {
                errors.data1 = "data1 start is required "
            }
            if (!data.data2) {
                errors.data2 = "data2 end is required "
            }
            if (!data.data3) {
                errors.data3 = "data3 is required "
            }
            return errors;
        },

        onSubmit: (data) => {
            let requestBody = {
                "profession": data.profession,
                "yearlyIncome": data.yearlyIncome,
                "age": data.age,
                "companyName": data.companyName,
                "mediclaimDetails": data.mediclaimDetails,
                "puchaseCar": data.puchaseCar,
                "data1": data.data1,
                "data2": data.data2,
                "data3": data.data3,
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
            <div className="card form-grid pl-3 pr-3 pt-5 pb-2 generalbgbox2">

                <form className="p-fluid grid" onSubmit={formik.handleSubmit}>
                    <div className="field col-12 md:col-3 lg:col-4">
                        <label
                            htmlFor="profession"
                            className={classNames({
                                "p-error": isFormFieldValid("profession"),
                            })}
                        >
                            Profession*
                        </label>
                        <Dropdown
                            id="profession"
                            name="profession"
                            value={formik.values.profession}
                            onChange={formik.handleChange}
                            autoFocus
                            options={dropdown}
                            optionLabel="name"
                            className={classNames({
                                "p-invalid": isFormFieldValid("profession"),
                            })}
                        />
                        {getFormErrorMessage("profession")}
                    </div>
                    <div className="field col-12 md:col-3 lg:col-4">
                        <label
                            htmlFor="yearlyIncome"
                            className={classNames({
                                "p-error": isFormFieldValid("yearlyIncome"),
                            })}
                        >
                            Yearly Income*
                        </label>
                        <InputText
                            id="yearlyIncome"
                            name="yearlyIncome"
                            value={formik.values.yearlyIncome}
                            onChange={formik.handleChange}
                            autoFocus
                            className={classNames({
                                "p-invalid": isFormFieldValid("yearlyIncome"),
                            })}
                        />
                        {getFormErrorMessage("yearlyIncome")}
                    </div>
                    <div className="field col-12 md:col-3 lg:col-4">
                        <label
                            htmlFor="age"
                            className={classNames({
                                "p-error": isFormFieldValid("age"),
                            })}
                        >
                            Age*
                        </label>
                        <Dropdown
                            id="age"
                            name="age"
                            value={formik.values.age}
                            onChange={formik.handleChange}
                            options={dropdown}
                            optionLabel="name"
                            autoFocus
                            className={classNames({
                                "p-invalid": isFormFieldValid("age"),
                            })}
                        />
                        {getFormErrorMessage("age")}
                    </div>
                    <div className="field col-12 md:col-3 lg:col-4">
                        <label
                            htmlFor="companyName"
                            className={classNames({
                                "p-error": isFormFieldValid("companyName"),
                            })}
                        >
                            Company Name*
                        </label>
                        <InputText
                            id="companyName"
                            name="companyName"
                            value={formik.values.companyName}
                            onChange={formik.handleChange}

                            optionLabel="companyName"
                        />
                        {getFormErrorMessage("companyName")}
                    </div>
                    <div className="field col-12 md:col-3 lg:col-4">
                        <label
                            htmlFor="mediclaimDetails"
                            className={classNames({
                                "p-error": isFormFieldValid("mediclaimDetails"),
                            })}
                        >
                            Mediclaim Details*
                        </label>
                        <InputText
                            id="mediclaimDetails"
                            name="mediclaimDetails"
                            value={formik.values.mediclaimDetails}
                            onChange={formik.handleChange}
                            autoFocus
                            className={classNames({
                                "p-invalid": isFormFieldValid("mediclaimDetails"),
                            })}
                        />
                        {getFormErrorMessage("mediclaimDetails")}
                    </div>
                    <div className="field col-12 md:col-3 lg:col-4">
                        <label
                            htmlFor="puchaseCar"
                            className={classNames({
                                "p-error": isFormFieldValid("puchaseCar"),
                            })}
                        >
                            Planning to Purchase Car*
                        </label>
                        <InputText
                            id="puchaseCar"
                            name="puchaseCar"
                            value={formik.values.puchaseCar}
                            onChange={formik.handleChange}
                            options={dropdown}
                            optionLabel="name"
                            autoFocus
                            className={classNames({
                                "p-invalid": isFormFieldValid("puchaseCar"),
                            })}
                        />
                        {getFormErrorMessage("puchaseCar")}
                    </div>
                    <div className="field col-12 md:col-3 lg:col-4">
                        <label
                            htmlFor="data1"
                            className={classNames({
                                "p-error": isFormFieldValid("data1"),
                            })}
                        >
                            data*
                        </label>
                        <InputText
                            id="data1"
                            name="data1"
                            value={formik.values.data1}
                            onChange={formik.handleChange}
                            autoFocus
                            showIcon
                            className={classNames({
                                "p-invalid": isFormFieldValid("data1"),
                            })}
                        />
                        {getFormErrorMessage("data1")}
                    </div>
                    <div className="field col-12 md:col-3 lg:col-4">
                        <label
                            htmlFor="data2"
                            className={classNames({
                                "p-error": isFormFieldValid("data2"),
                            })}
                        >
                            data*
                        </label>
                        <InputText
                            id="data2"
                            name="data2"
                            value={formik.values.data2}
                            onChange={formik.handleChange}
                            autoFocus
                            showIcon
                            className={classNames({
                                "p-invalid": isFormFieldValid("data2"),
                            })}
                        />
                        {getFormErrorMessage("data2")}
                    </div>

                    <div className="field col-12 md:col-3 lg:col-4">
                        <label
                            htmlFor="data3"
                            className={classNames({
                                "p-error": isFormFieldValid("data3"),
                            })}
                        >
                            data*
                        </label>
                        <InputText
                            id="data3"
                            name="data3"
                            value={formik.values.data3}
                            onChange={formik.handleChange}
                            autoFocus
                            options={dropdown}
                            optionLabel="name"
                            className={classNames({
                                "p-invalid": isFormFieldValid("data3"),
                            })}
                        />
                        {getFormErrorMessage("data3")}
                    </div>

                    {/*<Button type="submit" label="Submit" className="mt-2" />*/}
                    <div className="flex justify-content-end align-items-center w-full">
                        <div className="col-12 md:col-3 lg:col-3 mt-0 flex">
                            <Button type="cancel" label="Cancel" onClick={props.cancelEditDialog} className="p-button-danger mr-2" style={{ borderRadius: "6px", width: "10rem" }} />
                            <Button type="submit" label="Add" style={{ borderRadius: "6px", width: "10rem" }} />
                        </div>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default EditDialog;