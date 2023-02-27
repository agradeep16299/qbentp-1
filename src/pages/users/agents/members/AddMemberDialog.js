import React, { useRef, useState } from "react";
import { useFormik } from "formik";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { classNames } from "primereact/utils";
import { Dropdown } from 'primereact/dropdown';
import { Toast } from "primereact/toast";
import { asmRole, memberRole, zoneManagerName, rmRole, areaSalesManagerName, areaRegionalManagerName } from "../../../../shared/data";
import { zoneRole } from "../../../../shared/data";
import { Password } from 'primereact/password';
import { RadioButton } from 'primereact/radiobutton';
//import RoleField from "./RoleField";
const AddMemberDialog = (props) => {

    const [salutation, setSalutation] = useState(null)
    const [gender, setGender] = useState("")
    const [role, setRole] = useState("");
    const [zone, setZone] = useState("");
    const [asm, setAsm] = useState("")
    const [zmn, setZmn] = useState("")
    const [rm, setRm] = useState("")
    const [se, setSe] = useState("")
    const toastTL = useRef(null);
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            mobile: "",
            userName: "",
            password: "",
            role: "",
            zone: "",
            asm: "",
            zmn: "",
            rm: "",
            se: "",
        },
        validate: (data) => {
            let errors = {};

            if (!data.name) {
                errors.name = "Name is required."
            }
            if (!data.email) {
                errors.email = "Email is required"
            }
            if (!data.mobile) {
                errors.mobile = "Mobile No is required"
            }
            if (!data.userName) {
                errors.userName = "User Name is required"
            }
            if (!data.password) {
                errors.password = "Password is required "
            }
            if (!data.role) {
                errors.role = "Role is required "
            }

            return errors;
        },

        onSubmit: (data) => {
            let requestBody = {
                "name": data.name,
                "email": data.email,
                "mobile": data.mobile,
                "userName": data.userName,
                "password": data.password,
                "role": data.role.name,
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
        <>
            <div className="col-12" >
                <Toast ref={toastTL} position="top-left" />
                <div className="card form-grid pl-6 pr-6 pt-5 pb-5 generalbgbox">

                    <form onSubmit={formik.handleSubmit} className="p-fluid grid">
                        <div className="field col-12 md:col-6 lg:col-6">
                            <label className="block mb-2">salutation*</label>
                            <div className="w-full flex">
                                <div className="field-radiobutton mr-3">
                                    <RadioButton inputId="Mr" name="salutation" value="Mr" onChange={(e) => setSalutation(e.value)} checked={salutation === "Mr"} />
                                    <label htmlFor="Mr">Mr.</label>
                                </div>
                                <div className="field-radiobutton mr-3">
                                    <RadioButton inputId="Mrs" name="salutation" value="Mrs" onChange={(e) => setSalutation(e.value)} checked={salutation === "Mrs"} />
                                    <label htmlFor="Mrs">Mrs</label>
                                </div>

                            </div>
                        </div>
                        <div className="field col-12 md:col-6 lg:col-6">
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
                        <div className="field col-12 md:col-6 lg:col-6">
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
                        <div className="field col-12 md:col-6 lg:col-6">
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
                        <div className="field col-12 md:col-6 lg:col-6">
                            <label
                                htmlFor="userName"
                                className={classNames({
                                    "p-error": isFormFieldValid("userName"),
                                })}
                            >
                                User Name*
                            </label>
                            <InputText
                                id="userName"
                                name="userName"
                                value={formik.values.userName}
                                onChange={formik.handleChange}
                                autoFocus
                                className={classNames({
                                    "p-invalid": isFormFieldValid("userName"),
                                })}
                            />
                            {getFormErrorMessage("userName")}
                        </div>
                        <div className="field col-12 md:col-6 lg:col-6">
                            <label
                                htmlFor="password"
                                className={classNames({
                                    "p-error": isFormFieldValid("password"),
                                })}
                            >
                                Password*
                            </label>
                            <Password
                                id="password"
                                name="password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                toggleMask
                                autoFocus
                                className={classNames({
                                    "p-invalid": isFormFieldValid("password"),
                                })}
                            />
                            {getFormErrorMessage("password")}
                        </div>

                        <div className="field col-12 md:col-6 lg:col-6">
                            <label className="block mb-2">Gender*</label>
                            <div className="w-full flex">
                                <div className="field-radiobutton mr-3">
                                    <RadioButton inputId="Male" name="gender" value="Male" onChange={(e) => setGender(e.value)} checked={gender === "Male"} />
                                    <label htmlFor="Male">Male</label>
                                </div>
                                <div className="field-radiobutton mr-3">
                                    <RadioButton inputId="Female" name="gender" value="Female" onChange={(e) => setGender(e.value)} checked={gender === "Female"} />
                                    <label htmlFor="Mrs">Female</label>
                                </div>

                            </div>
                        </div>
                        <div className="field col-12 md:col-6 lg:col-6">
                            <label
                                htmlFor="role"
                                className={classNames({
                                    "p-error": isFormFieldValid("role"),
                                })}
                            >
                                Role*
                            </label>

                            <Dropdown
                                id="role"
                                name="role"
                                value={formik.values.role}
                                onChange={(e) => {
                                    setRole(e.value)
                                    // console.log(role.code)
                                    formik.handleChange(e)

                                }}
                                options={memberRole}
                                optionLabel="name"
                                placeholder="Choose Members Role"
                            />
                            {getFormErrorMessage("state")}

                        </div>
                        {(role.code === "ZM") ?
                            <div className="field col-12 md:col-6 lg:col-6">
                                <label
                                    htmlFor="zone"
                                    className={classNames({
                                        "p-error": isFormFieldValid("zone"),
                                    })}
                                >
                                    Zone Selection*
                                </label>

                                <Dropdown
                                    id="zone"
                                    name="zone"
                                    value={formik.values.zone}
                                    onChange={(e) => {
                                        setZone(e.value)
                                        //console.log(zone.code)
                                        formik.handleChange(e)
                                    }}
                                    options={zoneRole}
                                    optionLabel="name"
                                    placeholder="Choose Zonal Manager zone"
                                />
                                {getFormErrorMessage("zone")}
                            </div> : null}
                        {(role.code === "ASM") ?
                            <>
                                <div className="field col-12 md:col-6 lg:col-6">

                                    <label
                                        htmlFor="asm"
                                        className={classNames({
                                            "p-error": isFormFieldValid("asm"),
                                        })}
                                    >
                                        Select State*
                                    </label>

                                    <Dropdown
                                        id="asm"
                                        name="asm"
                                        value={formik.values.asm}
                                        onChange={(e) => {
                                            setAsm(e.value)
                                            // console.log(zone)
                                            formik.handleChange(e)

                                        }}
                                        options={asmRole}
                                        optionLabel="name"
                                        placeholder="Choose State"
                                    />
                                    {getFormErrorMessage("asm")}

                                </div>
                                <div className="field col-12 md:col-6 lg:col-6">

                                    <label
                                        htmlFor="zmn"
                                        className={classNames({
                                            "p-error": isFormFieldValid("zmn"),
                                        })}
                                    >
                                        Select Zonal Manager*
                                    </label>

                                    <Dropdown
                                        id="zmn"
                                        name="zmn"
                                        value={formik.values.zmn}
                                        onChange={(e) => {
                                            setZmn(e.value)
                                            // console.log(zmn)
                                            formik.handleChange(e)

                                        }}
                                        options={zoneManagerName}
                                        optionLabel="name"
                                        placeholder="Select Zonal Manager name"
                                    />
                                    {getFormErrorMessage("zmn")}

                                </div>
                            </>

                            : null}
                        {(role.code === "RM") ?
                            <>
                                <div className="field col-12 md:col-6 lg:col-6">

                                    <label
                                        htmlFor="rm"
                                        className={classNames({
                                            "p-error": isFormFieldValid("rm"),
                                        })}
                                    >
                                        Select Destrict*
                                    </label>

                                    <Dropdown
                                        id="rm"
                                        name="rm"
                                        value={formik.values.rm}
                                        onChange={(e) => {
                                            setRm(e.value)
                                            // console.log(rm)
                                            formik.handleChange(e)

                                        }}
                                        options={rmRole}
                                        optionLabel="name"
                                        placeholder="Choose Destrict Area"
                                    />
                                    {getFormErrorMessage("rm")}

                                </div>
                                <div className="field col-12 md:col-6 lg:col-6">

                                    <label
                                        htmlFor="asmn"
                                        className={classNames({
                                            "p-error": isFormFieldValid("asmn"),
                                        })}
                                    >
                                        Select Area Sales Manager*
                                    </label>

                                    <Dropdown
                                        id="asmn"
                                        name="asmn"
                                        value={formik.values.asmn}
                                        onChange={(e) => {
                                            setAsm(e.value)
                                            // console.log(zone)
                                            formik.handleChange(e)

                                        }}
                                        options={areaSalesManagerName}
                                        optionLabel="name"
                                        placeholder="Select Your Area Sales Manager Name"
                                    />
                                    {getFormErrorMessage("asmn")}

                                </div>
                            </>

                            : null}
                        {(role.code === "SE") ?


                            <div className="field col-12 md:col-6 lg:col-6">

                                <label
                                    htmlFor="se"
                                    className={classNames({
                                        "p-error": isFormFieldValid("se"),
                                    })}
                                >
                                    Select Regional Manager*
                                </label>

                                <Dropdown
                                    id="se"
                                    name="se"
                                    value={formik.values.se}
                                    onChange={(e) => {
                                        setSe(e.value)
                                        // console.log(se)
                                        formik.handleChange(e)

                                    }}
                                    options={areaRegionalManagerName}
                                    optionLabel="name"
                                    placeholder="Select Regional Manager"
                                />
                                {getFormErrorMessage("se")}

                            </div>
                            : null}
                        <div className="flex justify-content-end align-items-center w-full">
                            <div className="col-12 md:col-3 lg:col-4 mt-3 flex">
                                <Button label="Cancel" className="p-button-danger mr-3" style={{ borderRadius: "5px" }} />
                                <Button
                                    type="button"
                                    label="Save"
                                    buttonClassName="primary-btn"
                                    style={{ borderRadius: "5px" }}
                                ></Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddMemberDialog;