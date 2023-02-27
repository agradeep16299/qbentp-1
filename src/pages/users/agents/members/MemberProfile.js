import React, { useState, useEffect, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { ColumnGroup } from "primereact/columngroup";
import { Row } from "primereact/row";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import { Skeleton } from "primereact/skeleton";
import { Dialog } from "primereact/dialog";
import { BiEdit } from "react-icons/bi";
import Paginator from "../../../../components/Paginator";
import { memberStatic } from "../../../../shared/data"
import AddMemberDialog from "./AddMemberDialog";
const MemberProfile = () => {
    const toastTL = useRef(null);
    const [members, setMembers] = useState(memberStatic)
    //const [expandedRows, setExpandedRows] = useState(null);
    const [searchValue, setSearchValue] = useState("");
    const [sortByColumn, setSortByColumn] = useState(null);
    const [sortType, setSortType] = useState(null);
    const [pageNo, setpageNo] = useState(1);
    const [pageSize, setpageSize] = useState(10)
    const [memberDialog, setMemberDialog] = useState(false);
    const lodarTblArray = Array.from({ length: 10 });
    const skeletonBody = () => {
        return <Skeleton height="1.5rem"></Skeleton>;
    };
    /**
     * Table Sort Function
     */


    const addMemberClick = (item) => {
        setMemberDialog(true);
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

    /**
     *  Table Templates
     */
    const headerGroup = (
        <ColumnGroup>
            <Row>
                <Column style={{ width: "3em" }}></Column>
                <Column
                    header={getSortableColumn("Name", "name")}
                ></Column>
                <Column header={getSortableColumn("Email", "email")}></Column>
                <Column
                    header={getSortableColumn("Mobile", "mobile")}
                ></Column>
                <Column
                    header={getSortableColumn("User Name", "userName")}
                ></Column>
                <Column header={getSortableColumn("Role", "role")}></Column>
                <Column header={getSortableColumn("Status", "status")}></Column>
                <Column header="Action"></Column>
            </Row>
        </ColumnGroup>
    );
    const actionTemplate = () => {
        return (
            <div className="flex">
                <button
                    className="icon-btn primary-btn mr-2"
                >
                    <BiEdit />
                </button>
            </div>
        );
    };
    return (
        <>
            <div className="grid">
                <Toast ref={toastTL} position="top-left" />
                <div className="col">
                    <div className="w-full flex flex-wrap justify-content-between align-items-center">
                        <h3 className="m-0">Members</h3>
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
                            <Button
                                label="Add Members"
                                icon="pi pi-plus"
                                className="primary-btn"
                                onClick={(e) => addMemberClick()}
                            />
                        </div>
                    </div>
                </div>
                {members ? (

                    <div className="col-12">
                        <DataTable
                            headerColumnGroup={headerGroup}
                            value={members}
                            // expandedRows={expandedRows}
                            // onRowToggle={(e) => setExpandedRows(e.data)}
                            // rowExpansionTemplate={rowExpansionTemplate}
                            responsiveLayout="scroll"
                            // dataKey="agentId"
                            breakpoint="960px"
                        >
                            <Column
                                // expander={allowExpansion}
                                style={{ width: "3em" }}
                            />
                            <Column field="name" />
                            <Column field="email" />
                            <Column field="mobile" />
                            <Column field="userName" />
                            <Column field="role" />
                            <Column field="status" />
                            <Column body={actionTemplate} />

                        </DataTable>
                        {members.firstPage && members.lastPage ? null : (
                            <Paginator
                                pageSize={members.pageSize}
                                firstPage={members.firstPage}
                                lastPage={members.lastPage}
                                decrement={decrement}
                                increment={increment}
                                pagesizechange={pagesizechange}
                                pageNo={members.pageNo}
                                totalPages={members.totalPages}
                            />
                        )}
                    </div>
                ) : (
                    <div className="col-12">
                        <DataTable
                            value={lodarTblArray}
                            responsiveLayout="stack"
                            breakpoint="960px"
                        >
                            <Column field="name" header="Name" />
                            <Column field="email" header="Email" />
                            <Column field="mobile" header="Mobile No" />
                            <Column field="userName" header="User Name" />
                            <Column field="role" header="Role" />
                            <Column field="status" header="Status" />
                            <Column header="Action" body={[]} />
                        </DataTable>
                    </div>
                )}

                <Dialog header="Add Members" visible={memberDialog} style={{ width: "50vw" }} breakpoints={{ "960px": "75vw", "640px": "95vw" }} onHide={() => setMemberDialog(false)}>
                    < AddMemberDialog />
                </Dialog>
            </div>
        </>
    )
}
export default MemberProfile;