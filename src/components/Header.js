import moment from "moment/moment";
import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Menu } from "primereact/menu";
import PrimeReact from "primereact/api";
import { Ripple } from "primereact/ripple";
import { Badge } from "primereact/badge";
import { Button } from "primereact/button";
import { FiLogOut, FiCalendar, FiEdit, FiBell } from "react-icons/fi";
import logo from "../assets/images/logo_main.png";

const Header = (props) => {
	PrimeReact.ripple = true;
	const menu = useRef(null);
	const [innerWidth, setInnerWidth] = useState(window.innerWidth);
	const navigate = useNavigate();
	const user = JSON.parse(sessionStorage.getItem("user")) || null;
	const getInfo = (item, option) => {
		return (
			<div className="in-mob-info">
				{user ? (
					<p className="m-0 font-medium text-lg">
						{user.firstName} {user.lastName}
					</p>
				) : null}

				{/* <span className="mb-1">Super Admin</span> */}
				<span>
					<FiCalendar /> {moment().format("Do MMM, YYYY")}
				</span>
			</div>
		);
	};
	const items = [
		{
			label: "User Info",
			template: (item, option) => getInfo(item, option),
		},
		{
			label: "User Setting",
			items: [
				{
					label: "Change Password",
					icon: <FiEdit />,
				},
				{
					label: "Logout",
					icon: <FiLogOut />,
					command: () => logout(),
				},
			],
		},
	];

	useEffect(() => {
		setInnerWidth(window.innerWidth);
	}, []);

	const logout = () => {
		localStorage.clear();
		sessionStorage.clear();
		navigate("/login");
	};

	return (
		<div className="header-wrapper flex align-items-center">
			<div className="left-header">
				{innerWidth <= 600 ? (
					props.menuOpen ? (
						<Button
							icon="pi pi-times"
							className="p-button-rounded p-button-secondary p-button-text mr-3"
							onClick={props.menuOpener}
							aria-label="menu-toggle"
						/>
					) : (
						<Button
							icon="pi pi-bars"
							className="p-button-rounded p-button-secondary p-button-text mr-3"
							onClick={props.menuOpener}
							aria-label="menu-toggle"
						/>
					)
				) : null}

				<img className="app-logo" src={logo} alt="logo" />
			</div>
			<div className="right-header">
				<div className="notification mr-5 text-3xl p-ripple p-overlay-badge">
					<Badge
						severity="danger"
						style={{ top: "13px", right: "19px" }}
					></Badge>
					<FiBell />
					<Ripple />
				</div>
				<Menu
					model={items}
					popup
					ref={menu}
					id="popup_menu"
					className="p-0"
				/>
				<div
					className="user-info"
					onClick={(event) => menu.current.toggle(event)}
					aria-controls="popup_menu"
					aria-haspopup
				>
					<div className="info">
						{user ? (
							<p>
								{user.firstName} {user.lastName}
							</p>
						) : null}
						<span>Today: {moment().format("Do MMM, YYYY")}</span>
					</div>
					<div className="avater">
						<img
							src="https://xsgames.co/randomusers/avatar.php?g=male"
							alt="user avater"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
