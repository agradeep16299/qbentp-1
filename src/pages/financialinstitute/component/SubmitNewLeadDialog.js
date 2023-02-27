import React, { useRef, useState } from "react";
import { useFormik } from "formik";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { classNames } from "primereact/utils";
import { Dropdown } from 'primereact/dropdown';
import { Toast } from "primereact/toast";
import { Panel } from 'primereact/panel';
import { InputSwitch } from 'primereact/inputswitch';
import { Divider } from 'primereact/divider';
import { InsuranceData } from "../../../shared/data";
const dropdown = [
    { name: "A", code: "a" },
    { name: "B", code: "b" },
    { name: "C", code: "c" },
    { name: "D", code: "d" },
]
const SubmitNewLeadDialog = (props) => {
    const toastTL = useRef(null);
    const formik = useFormik({
        initialValues: {
            mobileNo: "",
            pin: "",
            city: "",
            name: "",
            middleName: "",
            lastName: "",
            products: null
        },
        validate: (data) => {
            let errors = {};

            if (!data.mobileNo) {
                errors.mobileNo = "mobile no name is required."
            }
            if (!data.pin) {
                errors.pin = "pin is required"
            }
            if (!data.city) {
                errors.city = "city is required"
            }
            if (!data.name) {
                errors.name = "name is required"
            }
            if (!data.middleName) {
                errors.middleName = "middle name is required "
            }
            if (!data.lastName) {
                errors.lastName = "last name is required "
            }

            return errors;
        },

        onSubmit: (data) => {
            console.log(data);
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
        <div className="col-12" >
            <Toast ref={toastTL} position="top-left" />
            <div className="card form-grid pl-3 pr-3 pt-5 pb-2 generalbgbox2">

                <form className="p-fluid grid" onSubmit={formik.handleSubmit}>
                    <div className="field col-12 md:col-3 lg:col-5">
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
                            autoFocus
                            options={dropdown}
                            optionLabel="name"
                            className={classNames({
                                "p-invalid": isFormFieldValid("mobileNo"),
                            })}
                        />
                        {getFormErrorMessage("mobileNo")}
                    </div>
                    <div className="field col-12 md:col-3 lg:col-2">
                        <label
                            htmlFor="pin"
                            className={classNames({
                                "p-error": isFormFieldValid("pin"),
                            })}
                        >
                            Pin *
                        </label>
                        <InputText
                            id="pin"
                            name="pin"
                            value={formik.values.pin}
                            onChange={formik.handleChange}
                            autoFocus
                            className={classNames({
                                "p-invalid": isFormFieldValid("pin"),
                            })}
                        />
                        {getFormErrorMessage("pin")}
                    </div>
                    <div className="field col-12 md:col-3 lg:col-5">
                        <label
                            htmlFor="city"
                            className={classNames({
                                "p-error": isFormFieldValid("city"),
                            })}
                        >
                            City*
                        </label>
                        <Dropdown
                            id="city"
                            name="city"
                            value={formik.values.city}
                            onChange={formik.handleChange}
                            options={dropdown}
                            optionLabel="name"
                            autoFocus
                            className={classNames({
                                "p-invalid": isFormFieldValid("city"),
                            })}
                        />
                        {getFormErrorMessage("city")}
                    </div>
                    <div className="field col-12 md:col-3 lg:col-5">
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

                            optionLabel="name"
                        />
                        {getFormErrorMessage("name")}
                    </div>
                    <div className="field col-12 md:col-3 lg:col-2">
                        <label
                            htmlFor="middleName"
                            className={classNames({
                                "p-error": isFormFieldValid("middleName"),
                            })}
                        >
                            *

                        </label>
                        <InputText
                            id="middleName"
                            name="middleName"
                            placeholder="Middle Name"
                            value={formik.values.middleName}
                            onChange={formik.handleChange}
                            autoFocus
                            className={classNames({
                                "p-invalid": isFormFieldValid("middleName"),
                            })}
                        />
                        {getFormErrorMessage("middleName")}
                    </div>
                    <div className="field col-12 md:col-3 lg:col-5">
                        <label
                            htmlFor="lastName"
                            className={classNames({
                                "p-error": isFormFieldValid("lastName"),
                            })}
                        >
                            *
                        </label>
                        <InputText
                            id="lastName"
                            name="lastName"
                            placeholder="Last Name"
                            value={formik.values.lastName}
                            onChange={formik.handleChange}
                            options={dropdown}
                            optionLabel="name"
                            autoFocus
                            className={classNames({
                                "p-invalid": isFormFieldValid("lastName"),
                            })}
                        />
                        {getFormErrorMessage("lastName")}
                    </div>

                    {
                        InsuranceData.map((item, index) => (
                            <div className="col-12 lg:col-6" key={index}>
                                <Panel header={item.title} toggleable>
                                    {
                                        item.subProducts.map((element, j) => (
                                            <>
                                                <div className=" flex justify-content-between align-items-center mt-0 mb-0">
                                                    <h5>{element.title}</h5>
                                                    <InputSwitch name="products[]" checked={true} onClick={formik.handleChange} />
                                                </div>
                                                <Divider />
                                            </>
                                        ))
                                    }
                                </Panel>
                            </div>
                        ))
                    }

                    {/*<Button type="submit" label="Submit" className="mt-2" />*/}
                    <div className="flex justify-content-end align-items-center w-full">
                        <div className="col-12 md:col-3 lg:col-3 mt-0 flex">
                            <Button type="cancel" label="Cancel" onClick={props.cancelButton} className="p-button-danger mr-2" style={{ borderRadius: "6px", width: "10rem" }} />
                            <Button type="submit" label="Submit" style={{ borderRadius: "6px", width: "10rem" }} />
                        </div>
                    </div>
                    </form>
            </div>
        </div>
    );
};

export default SubmitNewLeadDialog;
