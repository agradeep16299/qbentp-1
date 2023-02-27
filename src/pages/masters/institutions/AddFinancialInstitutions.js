import React, { useState, useEffect } from "react";
import AddContact from "./AddContact";
import AddContract from "./AddContract";
import BasicDetails from "./BasicDetails";
import Header from "./header";

const AddFinancialInstitutions = () => {
	let [num, setNum] = useState(1);
	const [stages, setstages] = useState([
		{
			sequence: 1,
			title: "General Information",
			status: "active",
		},
		{
			sequence: 2,
			title: "Contacts",
			status: "inactive",
		},
		{
			sequence: 3,
			title: "Contract",
			status: "inactive",
		},
	]);

	const [stageName, setstageName] = useState("General Information");

	const handelStages = () => {
		if (num < stages.length) {
			let newStage = [...stages];
			let sequence = num + 1;
			let index = newStage.findIndex(
				(item) => item.sequence === sequence
			);
			newStage[index].status = "active";
			newStage[index - 1].status = "success";
			setstageName(newStage[index].title);
			setstages(newStage);
			setNum(sequence);
		}
	};

	return (
		<div className="grid">
			<Header
				stages={stages}
				title="Add Financial Institutions"
				stageName={stageName}
			/>
			{num === 1 ? (
				<BasicDetails handelStages={handelStages} />
			) : num === 2 ? (
				<AddContact handelStages={handelStages} />
			) : num === 3 ? (
				<AddContract handelStages={handelStages} />
			) : null}
		</div>
	);
};

export default AddFinancialInstitutions;
