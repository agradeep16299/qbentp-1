import React, { useState, useEffect } from "react";
import { FiCheck } from "react-icons/fi";

const Header = (props) => {
	
	return (
		<div className="col-12">
			<div className="title-bar pt-3">
				<h3 className="m-0">{props.title}</h3>
				<p className="m-0">{props.stageName}</p>
			</div>
			<div className="mainwidgetbox w-4 flex flex-wrap justify-content-between align-items-center">
				{props.stages.map((item, index) => (
					<div className="widgetbox" key={`weighet-${index}`}>
						<div
							className={
								item.status === "active"
									? "widgetcount flex justify-content-center align-items-center m-auto active"
									: item.status === "success"
									? "widgetcount flex justify-content-center align-items-center m-auto success"
									: "widgetcount flex justify-content-center align-items-center m-auto"
							}
						>
							<p>
								{item.status === "success" ? (
									<FiCheck />
								) : (
									item.sequence
								)}
							</p>
						</div>
						<p className="m-0">{item.title}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Header;
