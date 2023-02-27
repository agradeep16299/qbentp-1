import React, { useState } from "react";
import { sidenavData } from "../shared/data";
import { NavLink } from "react-router-dom";

const Subnav = ({ item }) => {
	const [subMenu, setsubMenu] = useState(false);
	const showSubMenu = () => setsubMenu(!subMenu);

	return item.child ? (
		<li className="nav-sub-item" onClick={item.child && showSubMenu}>
			<div className="flex justify-content-between align-items-center">
				<span className="menu-name">{item.title}</span>
				{subMenu ? (
					<span className="pi pi-angle-down"></span>
				) : (
					<span className="pi pi-angle-right"></span>
				)}
			</div>
			{subMenu ? (
				<ul className="menu-list">
					{item.child.map((el, k) => {
						return (
							<li
								className="menu-list-item"
								key={"sub-sub-nav-" + k}
							>
								<NavLink to={el.path}>{el.title}</NavLink>
							</li>
						);
					})}
				</ul>
			) : null}
		</li>
	) : (
		<li className="nav-sub-item">
			<NavLink className="menu-name" to={item.path}>
				{item.title}
			</NavLink>
		</li>
	);
};

const Sidenav = ({ menuOpen }) => {
	return (
		<div className={menuOpen ? "sidenav-wrapper opend" : "sidenav-wrapper"}>
			<ul className="nav-list">
				{sidenavData.map((items, i) => {
					return items.child ? (
						<li className="nav-item" key={"nav-" + i}>
							<span className="nav-item-content">
								{items.icon}
							</span>
							<div className="sub-nav-list">
								<h3 className="nav-title">{items.title}</h3>
								<ul className="child-nav-list">
									{items.child.map((elm, j) => {
										return <Subnav item={elm} key={j} />;
									})}
								</ul>
							</div>
						</li>
					) : (
						<li className="nav-item" key={"nav-" + i}>
							<NavLink
								to={items.path}
								className="nav-item-content"
							>
								{items.icon}
							</NavLink>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Sidenav;
