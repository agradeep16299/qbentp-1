import React, { useState, useEffect, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { ColumnGroup } from "primereact/columngroup";
import { Row } from "primereact/row";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { SplitButton } from "primereact/splitbutton";
import { Toast } from "primereact/toast";
import { Dialog } from "primereact/dialog";
import { TabView, TabPanel } from "primereact/tabview";
import { BiEdit } from "react-icons/bi";
import { MdToggleOn, MdToggleOff } from "react-icons/md";

import Paginator from "../../../components/Paginator";
import General from "./General";
import Product from "./Product";
import KyDetail from "./KyDetail";
import BankDetail from "./BankDetail";
import CompanyDetail from "./CompanyDetail";
import ParentAgentDetail from "./ParentAgentDetail";
import { AgentService } from "../../../services/AgentService";

const AgentsProfile = () => {
	const toastTL = useRef(null);
	const agentService = new AgentService();
	const [agents, setAgents] = useState(null);
	const [agent, setagent] = useState(null);
	const [expandedRows, setExpandedRows] = useState(null);
	const [searchValue, setSearchValue] = useState("");
	const [sortByColumn, setSortByColumn] = useState(null);
	const [sortType, setSortType] = useState(null);
	const [pageNo, setpageNo] = useState(1);
	const [pageSize, setpageSize] = useState(10);
	const [profileDetailDialog, setprofileDetailDialog] = useState(false);

	/**
	 * Table Sort Function
	 */
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

	useEffect(() => {
		let payload = {
			searchRequest: "",
			pageNo: pageNo,
			pageSize: pageSize,
			sorts: [],
		};
		if (searchValue !== "") {
			payload.searchRequest = searchValue;
		}
		if (sortByColumn && sortType) {
			payload.sorts = [sortByColumn + "," + sortType];
		}
		getAgents(payload);
	}, [searchValue, sortByColumn, sortType, pageNo, pageSize]);

	const getAgents = (payload) => {
		agentService
			.getAgentsProfiles(payload)
			.then((res) => {
				setAgents(res);
				console.log(res);
			})
			.catch((e) => {
				console.log(e.message);
			});
	};

	const increment = () => {
		setpageNo(pageNo + 1);
	};
	const decrement = () => {
		setpageNo(pageNo - 1);
	};
	const pagesizechange = (e) => {
		setpageSize(e.target.value);
	};

	const getProfileDetails = (id) => {
		agentService
			.getProfileDetails(id)
			.then((res) => {
				console.log(res);
				setagent(res);
				setprofileDetailDialog(true);
			})
			.catch((e) => {
				console.log(e.message);
			});
	};

	const chengeStatus = (status) => {
		let payload = {
			agentId: agent.profile.agent.id,
			profileId: agent.profile.id,
			Status: status,
		};
		agentService
			.agentProfileStatusChange(payload)
			.then((res) => {
				if (res) {
					toastTL.current.show({
						severity: "success",
						summary: "Success",
						detail: "Profile status changed",
						style: { color: "#000000" },
						life: 3000,
					});
					setprofileDetailDialog(false);
					setagent(null);
					let payload = {
						searchRequest: "",
						pageNo: pageNo,
						pageSize: pageSize,
						sorts: [],
					};
					getAgents(payload);
				}
			})
			.catch((e) => {
				toastTL.current.show({
					severity: "error",
					summary: e.name,
					detail: e.message,
					style: { color: "#000000" },
					life: 3000,
				});
				setprofileDetailDialog(false);
				setagent(null);
			});
	};

	/**
	 *  Table Templates
	 */
	const headerGroup = (
		<ColumnGroup>
			<Row>
				<Column style={{ width: "3em" }}></Column>
				<Column
					header={getSortableColumn("Name", "firstName")}
				></Column>
				<Column
					header={getSortableColumn("Mobile", "mobileNumber")}
				></Column>
				<Column header={getSortableColumn("Email", "emailId")}></Column>
				<Column header={getSortableColumn("Gender", "gender")}></Column>
				<Column
					header={getSortableColumn("User Name", "userName")}
				></Column>
				<Column header="Status"></Column>
			</Row>
		</ColumnGroup>
	);

	const agentStatus = ({ status }) => {
		return status === null || status.toLowerCase() === "inactive" ? (
			<span className="status status-mute">Inactive</span>
		) : status.toLowerCase() === "blocked" ? (
			<span className="status status-danger-deep">Blocked</span>
		) : (
			<span className="status status-primary">Active</span>
		);
	};

	const boolTemplate = ({ active }) => {
		return active ? (
			<span className="text-seccess text-4xl">
				<MdToggleOn />
			</span>
		) : (
			<span className="text-danger text-4xl">
				<MdToggleOff />
			</span>
		);
	};

	const profileStatus = ({ status }) => {
		return status === "VERIFIED" ? (
			<span className="status status-success">Verified</span>
		) : status === "TEMPORARY_SUSPENDED" ? (
			<span className="status status-danger">Temporary Suspended</span>
		) : status === "ON_HOLD" ? (
			<span className="status status-warning">On Hold</span>
		) : status === "BLOCKED" ? (
			<span className="status status-danger-deep">Blocked</span>
		) : (
			<span className="status status-ban">Not Verified</span>
		);
	};

	const nameTemplate = ({ firstName, middleName, lastName }) => {
		return firstName + " " + middleName + " " + lastName;
	};

	const actionTemplate = (item) => {
		return (
			<div className="flex">
				<button
					className="icon-btn primary-btn mr-2"
					onClick={() => getProfileDetails(item.id)}
				>
					<BiEdit />
				</button>
			</div>
		);
	};

	const allowExpansion = (rowData) => {
		return rowData.profileList.length > 0;
	};
	const rowExpansionTemplate = (data) => {
		return (
			<div className="w-full">
				<h5>
					Profile for{" "}
					{data.salutation +
						" " +
						data.firstName +
						" " +
						data.lastName}
				</h5>
				<DataTable value={data.profileList} responsiveLayout="scroll">
					<Column field="profileType" header="Profile Type"></Column>
					<Column field="pincode" header="Working Area"></Column>
					<Column
						header="Default Profile"
						headerClassName="text-center"
						bodyClassName="text-center"
						body={boolTemplate}
					></Column>
					<Column body={profileStatus} header="Status"></Column>
					<Column
						field="action"
						header="Action"
						body={actionTemplate}
					/>
				</DataTable>
			</div>
		);
	};

	const agentProfileFooter = () => {
		const items = [
			{
				label: "Approve",
				command: () => {
					chengeStatus("VERIFIED");
				},
			},
			{
				label: "Temporari Suspend",
				command: () => {
					chengeStatus("TEMPORARY_SUSPENDED");
				},
			},
			{
				label: "Block",
				command: () => {
					chengeStatus("BLOCKED");
				},
			},
		];

		return (
			<div className="flex justify-content-end">
				<Button label="Cancel" className="p-button-danger mr-3" />
				<SplitButton
					label="Save"
					buttonClassName="primary-btn"
					model={items}
				/>
			</div>
		);
	};

	return (
		<>
			<div className="grid">
				<Toast ref={toastTL} position="top-left" />
				<div className="col">
					<div className="w-full flex flex-wrap justify-content-between align-items-center">
						<h3 className="m-0">Agents</h3>
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
									placeholder="Search Agents"
									className="search-field"
								/>
							</span>
						</div>
					</div>
				</div>

				{agents ? (
					<div className="col-12">
						<DataTable
							headerColumnGroup={headerGroup}
							value={agents.data}
							expandedRows={expandedRows}
							onRowToggle={(e) => setExpandedRows(e.data)}
							rowExpansionTemplate={rowExpansionTemplate}
							responsiveLayout="scroll"
							dataKey="agentId"
							breakpoint="960px"
						>
							<Column
								expander={allowExpansion}
								style={{ width: "3em" }}
							/>
							<Column body={nameTemplate} />
							<Column field="mobileNumber" />
							<Column field="emailId" />
							<Column field="gender" bodyClassName="capitalize" />
							<Column field="userName" />
							<Column body={agentStatus} />
						</DataTable>
						{agents.firstPage && agents.lastPage ? null : (
							<Paginator
								pageSize={agents.pageSize}
								firstPage={agents.firstPage}
								lastPage={agents.lastPage}
								decrement={decrement}
								increment={increment}
								pagesizechange={pagesizechange}
								pageNo={agents.pageNo}
								totalPages={agents.totalPages}
							/>
						)}
					</div>
				) : null}
			</div>

			{/* for dialog modal popup */}
			<div className="dialog-demo">
				<div className="card ">
					<Dialog
						header="Verify Agent Profile"
						visible={profileDetailDialog}
						onHide={() => setprofileDetailDialog(false)}
						breakpoints={{ "960px": "97vw" }}
						style={{ width: "65vw" }}
						footer={agentProfileFooter}
					>
						<div className="w-full">
							{agent ? (
								<TabView activeIndex={0}>
									{agent.hasOwnProperty("profile") ? (
										<TabPanel header="General">
											<General agent={agent} />
										</TabPanel>
									) : null}

									{agent.hasOwnProperty("products") ? (
										<TabPanel header="Products">
											<Product agent={agent} />
										</TabPanel>
									) : null}

									{agent.hasOwnProperty("profile") ? (
										<TabPanel header="KYC Details">
											<KyDetail agent={agent} />
										</TabPanel>
									) : null}

									{agent.hasOwnProperty("bankDetails") ? (
										<TabPanel header="Bank Details">
											<BankDetail agent={agent} />
										</TabPanel>
									) : null}

									{agent.hasOwnProperty("company") ? (
										<TabPanel header="Company Details">
											<CompanyDetail agent={agent} />
										</TabPanel>
									) : null}

									{agent.hasOwnProperty("parentAgent") ? (
										<TabPanel header="Parent Agent Details">
											<ParentAgentDetail agent={agent} />
										</TabPanel>
									) : null}
								</TabView>
							) : null}
						</div>
					</Dialog>
				</div>
			</div>
		</>
	);
};

export default AgentsProfile;
