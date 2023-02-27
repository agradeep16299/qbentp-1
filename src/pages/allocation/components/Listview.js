import React, { useReducer, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ColumnGroup } from "primereact/columngroup";
import { Row } from "primereact/row";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { BiEdit } from "react-icons/bi";
import { listData } from "../../../shared/data";
import Paginator from "../../../components/Paginator";
const Listview = () => {
	const [pageNo, setpageNo] = useState(1);
	const [pageSize, setpageSize] = useState(10);

	const [sortByColumn, setSortByColumn] = useState(null);
	const [sortType, setSortType] = useState(null);
	const [searchValue, setSearchValue] = useState("");

	// const initialState = {
	// 	pageNo: 1,
	// 	pageSize: 10,
	// 	sortByColumn: null,
	// 	sortType: null,
	// 	searchValue:"",
	// }

	// const reducer = (state,action) => {
	// 	switch (action.type) {
	// 		case 'SETPAGENO' :
	// 			return(
	//
	// )
	// 			break;

	// 		default:
	// 			break;
	// 	}
	// }

	// const [state,dispatch] = useReducer(reducer,initialState);
	const headerGroup = (
		<ColumnGroup>
			<Row>
				<Column
					header={getSortableColumn("Profile type", "profiletype")}
				></Column>
				<Column header={getSortableColumn("Name", "name")}></Column>
				<Column
					header={getSortableColumn("Mobile no", "mobile")}
				></Column>
				<Column header={getSortableColumn("Email", "email")}></Column>

				<Column
					header={getSortableColumn("Username", "username")}
				></Column>
				<Column header={getSortableColumn("Gender", "gender")}></Column>
			</Row>
		</ColumnGroup>
	);
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
	const actionTemplate = (item) => {
		return (
			<button className="icon-btn primary-btn">
				<BiEdit />
			</button>
		);
	};
	return (
		<>
			<div>
				<div className="col">
					<div className="w-full flex flex-wrap justify-content-between align-items-center">
						<h3 className="m-0">List</h3>
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
									onChange={(e) =>
										setSearchValue(e.target.value)
									}
									placeholder="Search Products"
									className="search-field"
								/>
							</span>
						</div>
					</div>
				</div>
				<div>
					<DataTable
						headerColumnGroup={headerGroup}
						value={listData.data}
						responsiveLayout={"scroll"}
						className="mt-6"
					>
						<Column field="profiletype" />
						<Column field="name" />
						<Column field="mobile" />
						<Column field="email" />
						<Column field="username" />
						<Column field="gender" />
					</DataTable>
					<Paginator
						pageSize={listData.pageSize}
						firstPage={listData.firstPage}
						lastPage={listData.lastPage}
						decrement={decrement}
						increment={increment}
						pagesizechange={pagesizechange}
						pageNo={listData.pageNo}
						totalPages={listData.totalPages}
					/>
				</div>
			</div>
		</>
	);
};

export default Listview;
