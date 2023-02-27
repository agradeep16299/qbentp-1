import React, { useState, useEffect, useRef } from "react";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { ColumnGroup } from "primereact/columngroup";
import { Row } from "primereact/row";
import { Column } from "primereact/column";
import { BiEdit } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { InstitutionService } from "../../../services/InstitutionService";
import Paginator from "../../../components/Paginator";

const FinancialInstitutions = () => {
	let navigate = useNavigate();
	const [institution, setInstitution] = useState(null);
	const [searchValue, setSearchValue] = useState("");
	const [columnName, setColumnName] = useState("name");
	const [operation, setoperation] = useState("LIKE");
	const [sortByColumn, setSortByColumn] = useState(null);
	const [sortType, setSortType] = useState(null);
	const [pageNo, setpageNo] = useState(1);
	const [pageSize, setpageSize] = useState(10);

	const inistitution = new InstitutionService();

	const routeChange = () => {
		let path = `/masters/financial-institutions/add`;
		navigate(path);
	};

	useEffect(() => {
		let payload = {
			searchRequest: [],
			pageNo: pageNo,
			pageSize: pageSize,
			sorts: [],
		};
		if (searchValue !== "" && columnName && operation) {
			payload.searchRequest = [
				{
					column: columnName,
					value: searchValue,
					operation: operation,
				},
			];
		}
		if (sortByColumn && sortType) {
			payload.sorts = [sortByColumn + "," + sortType];
		}
		getInstitution(payload);
		return () => {
			payload = {};
		};
	}, [
		columnName,
		searchValue,
		operation,
		sortByColumn,
		sortType,
		pageNo,
		pageSize,
	]);

	function getInstitution(payload) {
		inistitution
			.getInstitution(payload)
			.then((res) => {
				setInstitution(res);
			})
			.catch((error) => {
				console.log(error);
			});
	}

	function getSortableColumn(name, columnName) {
		return (
			<span className="flex align-items-center">
				{name}
				<span className="flex flex-column text-xs ml-2">
					<span
						className={
							sortByColumn === columnName && sortType === "asc"
								? "sort-icon asc active"
								: "sort-icon asc"
						}
						onClick={() => tblSort(columnName, "asc")}
					></span>
					<span
						className={
							sortByColumn === columnName && sortType === "desc"
								? "sort-icon desc active"
								: "sort-icon desc"
						}
						onClick={() => tblSort(columnName, "desc")}
					></span>
				</span>
			</span>
		);
	}
	function tblSort(columnName, sortType) {
		setSortByColumn(columnName);
		setSortType(sortType);
	}

	const increment = () => {
		setpageNo(pageNo + 1);
	};
	const decrement = () => {
		setpageNo(pageNo - 1);
	};
	const pagesizechange = (e) => {
		setpageSize(e.target.value);
	};

	//Table Template
	const headerGroup = (
		<ColumnGroup>
			<Row>
				<Column header={getSortableColumn("Type", "type")}></Column>
				<Column header={getSortableColumn("Name", "name")}></Column>
				<Column header={getSortableColumn("Alias","alias")}></Column>
				<Column header="Address"></Column>
				<Column header={getSortableColumn("City", "city")}></Column>
				<Column header="Action"></Column>
			</Row>
		</ColumnGroup>
	);
	const actionTemplate = (item) => {
		return (
			<button className="icon-btn primary-btn">
				<BiEdit />
			</button>
		);
	};
	const addressTemplate = (item) => {
		return `${item.addressLine1} ${item.addressLine2} ${item.addressLine3}`;
	};

	return (
		<div className="grid">
			<div className="col">
				<div className="w-full flex flex-wrap justify-content-between align-items-center">
					<h3 className="m-0">Financial Institutions</h3>
					<div className="flex align-items-center">
						<Button
							label="Filter"
							icon="pi pi-filter-fill"
							iconPos="left"
							className="disabled-btn"
						/>
						<span className="p-input-icon-left">
							<i className="pi pi-search" />
							<InputText
								value={searchValue}
								onChange={(e) => setSearchValue(e.target.value)}
								placeholder="Search Products"
								className="search-field"
							/>
						</span>
						<Button
							label="Add New"
							icon="pi pi-plus"
							iconPos="right"
							className="primary-btn"
							onClick={routeChange}
						/>
					</div>
				</div>
			</div>
			{institution ? (
				<div className="col-12">
					<DataTable
						headerColumnGroup={headerGroup}
						value={institution.data}
						responsiveLayout="stack"
						breakpoint="960px"
					>
						<Column field="type" />
						<Column field="name" />
						<Column field="alias" />
						<Column body={addressTemplate} />
						<Column field="city" />
						<Column body={actionTemplate} />
					</DataTable>

					<Paginator
						pageSize={institution.pageSize}
						firstPage={institution.firstPage}
						lastPage={institution.lastPage}
						decrement={decrement}
						increment={increment}
						pagesizechange={pagesizechange}
						pageNo={institution.pageNo}
						totalPages={institution.totalPages}
					/>
				</div>
			) : null}
		</div>
	);
};

export default FinancialInstitutions;
