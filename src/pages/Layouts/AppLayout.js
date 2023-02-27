import React, { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Sidenav from "../../components/Sidenav";

const AppLayout = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const onOpenerClick = () => setMenuOpen(!menuOpen);
	const navigate = useNavigate();
	const authToken = sessionStorage.getItem("token") || null;

	useEffect(() => {
		if (authToken === null) {
			navigate("/login");
		}
	}, []);

	return (
		<>
			<div className="app-wrapper">
				<Sidenav menuOpen={menuOpen} />
				<div className="app-grid">
					<Header menuOpener={onOpenerClick} menuOpen={menuOpen} />
					<div className="app-content">
						<Outlet />
					</div>
				</div>
			</div>
		</>
	);
};

export default AppLayout;
