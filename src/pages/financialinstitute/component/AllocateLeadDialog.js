import React, { useRef, useState } from "react";
import { useFormik } from "formik";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { classNames } from "primereact/utils";
import { Dropdown } from 'primereact/dropdown';
import { Toast } from "primereact/toast";
import CheckboxTable from "./CheckboxTable";
const dropdown = [
    { name: "Agent", code: "a" },
    { name: "User", code: "u" },

]
const AllocateLeadDialog = (props) => {
    const toastTL = useRef(null);
    const [toggle, setToggle] = useState(true);
    const [agent, setAgent] = useState(null);
    const formik = useFormik({
        initialValues: {
            type: "",
            pin: "",
            name: "",
            id: "",
        },
        onSubmit: (data) => {
            let requestBody = {
                "type": data.type,
                "pin": data.pin,
                "name": data.name,
                "id": data.id,
            };
            console.log(requestBody);
            //formik.resetForm();
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
    const handelSelectedAgent = (value) => {
        setAgent(value);
    }
   
        const allocateAgent = () => {
            console.log(agent.id)
        }
    return (
        <div className="mt-3 mb-3">
            <Toast ref={toastTL} position="top-left" />
            <div className="card form-grid pl-3 pr-3 pt-5 pb-2 generalbgbox2">
                <form className="p-fluid grid" onSubmit={formik.handleSubmit}>
                    <div className="field col-12 md:col-6 lg:col-6">
                        <label
                            htmlFor="type"
                            className={classNames({
                                "p-error": isFormFieldValid("type"),
                            })}
                        >
                            Type
                        </label>
                        <Dropdown
                            id="type"
                            name="type"
                            value={formik.values.type}
                            onChange={formik.handleChange}
                            options={dropdown}
                            optionLabel="name"
                            autoFocus
                            className={classNames({
                                "p-invalid": isFormFieldValid("type"),
                            })}
                        />
                        {getFormErrorMessage("type")}
                    </div>
                    <div className="field col-12 md:col-6 lg:col-6">
                        <label
                            htmlFor="pin"
                            className={classNames({
                                "p-error": isFormFieldValid("pin"),
                            })}
                        >
                            Pin
                        </label>
                        <InputText
                            id="pin"
                            name="pin"
                            value={formik.values.pin}
                            onChange={formik.handleChange}

                        />
                        {getFormErrorMessage("pin")}
                    </div>
                    <div className="field col-12 md:col-6 lg:col-6">
                        <label
                            htmlFor="name"
                            className={classNames({
                                "p-error": isFormFieldValid("name"),
                            })}
                        >
                            Name
                        </label>
                        <InputText
                            id="name"
                            name="name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                        />
                        {getFormErrorMessage("name")}
                    </div>
                    <div className="field col-12 md:col-6 lg:col-6">
                        <label
                            htmlFor="id"
                            className={classNames({
                                "p-error": isFormFieldValid("id"),
                            })}
                        >
                            Id
                        </label>
                        <InputText
                            id="id"
                            name="id"
                            value={formik.values.id}
                            onChange={formik.handleChange}
                        />
                        {getFormErrorMessage("id")}
                    </div>
                    <div className="flex  justify-content-end align-items-center w-full">
                        <div className="col-12 md:col-3 lg:col-3 mt-0 flex">
                            <Button type="submit" label={toggle ? "cancel" : "Find"} style={{ borderRadius: "6px", width: "10rem" }} onClick={() => setToggle(!toggle)} ></Button>
                        </div>
                    </div>
                </form>

                {toggle && <CheckboxTable agent={agent} handelSelectedAgent={handelSelectedAgent} />}


            </div>
            <div className="flex  justify-content-end align-items-center w-full ">
                <div className="col-12 md:col-3 lg:col-3 mt-4 flex">
                    <Button type="cancel" onClick={props.allocateCancelButton} label="Cancel" className="p-button-danger mr-2" style={{ borderRadius: "6px", width: "10rem" }} />
                    <Button type="submit" onClick={allocateAgent} label="save" style={{ borderRadius: "6px", width: "10rem" }} ></Button>
                </div>
            </div>

        </div>
    );
};

export default AllocateLeadDialog;