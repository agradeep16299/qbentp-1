import React from "react";

import { Tree } from "primereact/tree";
import { allocationTree } from "../../../shared/data";
const Treeview = () => {
	const dataTemplate = (data, options) => {
		// if (data.type === "ZM") {
		// 	return (

		// 	);
		// };
		switch (data.type) {
			case "ZM":
				return (
					<table className="tablegrid">
						<tr>
							<th>Profile</th>
							<th>Name</th>
							<th>Mobile No.</th>
							<th>Email</th>
							<th>Zone</th>
						</tr>
						<tr>
							<td>{data.label}</td>
							<td>{data.data.name}</td>
							<td>{data.data.mobile}</td>
							<td>{data.data.email}</td>
							<td>{data.data.zone}</td>
						</tr>
					</table>

					// <div className="flex">
					// 	<div className="mx-3">{data.label}</div>
					// 	<div className="mx-3">{data.data.name}</div>
					// 	<div className="mx-3">{data.data.mobile}</div>
					// 	<div className="mx-3">{data.data.email}</div>
					// 	<div className="mx-3">{data.data.state}</div>
					// </div>
				);
				break;
			case "ASM":
				return (
					<table className="tablegrid">
						<tr>
							<th>Profile</th>
							<th>Name</th>
							<th>Mobile No.</th>
							<th>Email</th>
							<th>State</th>
						</tr>
						<tr>
							<td>{data.label}</td>
							<td>{data.data.name}</td>
							<td>{data.data.mobile}</td>
							<td>{data.data.email}</td>
							<td>{data.data.state}</td>
						</tr>
					</table>
				);
				break;
			case "RM":
				return (
					<table className="tablegrid">
						<tr>
							<th>Profile</th>
							<th>Name</th>
							<th>Mobile No.</th>
							<th>Email</th>
							<th>District</th>
						</tr>
						<tr>
							<td>{data.label}</td>
							<td>{data.data.name}</td>
							<td>{data.data.mobile}</td>
							<td>{data.data.email}</td>
							<td>{data.data.district}</td>
						</tr>
					</table>
				);
			case "SALES EXCUTIVE":
				return (
					<table className="tablegrid">
						<tr>
							<th>Profile</th>
							<th>Name</th>
							<th>Mobile No.</th>
							<th>Email</th>
							<th>Area</th>
						</tr>
						<tr>
							<td>{data.label}</td>
							<td>{data.data.name}</td>
							<td>{data.data.mobile}</td>
							<td>{data.data.email}</td>
							<td>
								{data.data.area.map((e) => (
									<p>{e}</p>
								))}
							</td>
						</tr>
					</table>
				);
				break;
			case "AGENT":
				return (
					<table className="tablegrid">
						<tr>
							<th>Profile</th>
							<th>Name</th>
							<th>Mobile No.</th>
							<th>Email</th>
							<th>Area</th>
						</tr>
						<tr>
							<td>{data.label}</td>
							<td>{data.data.name}</td>
							<td>{data.data.mobile}</td>
							<td>{data.data.email}</td>
							<td>
								{data.data.area.map((e) => (
									<p>{e}</p>
								))}
							</td>
						</tr>
					</table>
				);
				break;
			default:
				return <>No data</>;
				break;
		}
	};
	return (
		<>
			<Tree
				value={allocationTree}
				nodeTemplate={dataTemplate}
				draggable={false}
			/>
		</>
	);
};

export default Treeview;
