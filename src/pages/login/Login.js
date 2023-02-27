import React, { Component } from "react";
import { Formik, Form, Field, FormikProps } from "formik";
import { Navigate } from "react-router-dom";
import * as Yup from "yup";
import { FiAtSign, FiLock } from "react-icons/fi";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import authBG from "../../assets/images/login_bg.png";
import logo from "../../assets/images/logo_main.png";
import { AuthService } from "../../services/AuthService";

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			authToken: null,
		};
		this.loginSchema = Yup.object().shape({
			username: Yup.string().required("User ID can't be empty."),
			password: Yup.string().required("Password can't be empty."),
		});
		this.authService = new AuthService();
	}

	handelLogin = (values) => {
		this.setState({ loading: true });
		Promise.all([
			this.authService.login(values),
			this.authService.superLogin(values),
		])
			.then((res) => {
				sessionStorage.setItem("token", res[0].jwttoken);
				sessionStorage.setItem("supertoken", res[1].jwttoken);
				sessionStorage.setItem("user", JSON.stringify(res[0].user));
				this.setState({ authToken: res[0].jwttoken });
				this.setState({ loading: false });
			})
			.catch((e) => {
				this.toast.show({
					severity: "error",
					summary: e.name,
					detail: e.message,
					style: { color: "#000000" },
					sticky: true,
				});
				this.setState({ loading: false });
			});
	};

	render = () => {
		return (
			<>
				{this.state.authToken && <Navigate to="/" replace={true} />}
				<div className="app-wrapper h-screen secondary-bg">
					<Toast
						ref={(el) => (this.toast = el)}
						position="bottom-left"
					/>
					<div className="auth-bg flex">
						<img className="w-full" src={authBG} alt="Authbg" />
					</div>
					<div className="conatiner">
						<div className="grid">
							<div className="col-12">
								<div className="auth-logo-grid">
									<img
										className="img-fluid"
										src={logo}
										alt=""
									/>
								</div>
							</div>
							<div className="col-12">
								<div className="auth-wrapper">
									<div className="card auth-card">
										<h2>Log In</h2>
										<Formik
											initialValues={{
												userId: "",
												password: "",
											}}
											validationSchema={this.loginSchema}
											onSubmit={(values) => {
												this.handelLogin(values);
											}}
										>
											{({ errors, touched }) => (
												<Form>
													<div className="auth-field position-relative mb-4">
														<span className="icon">
															<FiAtSign />
														</span>
														<Field
															name="username"
															type="text"
															className="auth-input"
															placeholder="User ID"
														/>
														{errors.username &&
														touched.username ? (
															<div className="text-danger">
																{
																	errors.username
																}
															</div>
														) : null}
													</div>
													<div className="auth-field position-relative mb-4">
														<span className="icon">
															<FiLock />
														</span>
														<Field
															name="password"
															type="password"
															className="auth-input"
															placeholder="Password"
														/>
														{errors.password &&
														touched.password ? (
															<div className="text-danger">
																{
																	errors.password
																}
															</div>
														) : null}
													</div>
													<div className="d-grid gap-2">
														<Button
															type="submit"
															label="Login"
															loading={
																this.state
																	.loading
															}
															className="primary-btn w-full border-round-md"
														/>
													</div>
												</Form>
											)}
										</Formik>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	};
}

export default Login;
