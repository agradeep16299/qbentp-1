import React, { useState } from 'react'
import { DataTable } from "primereact/datatable";
import { ColumnGroup } from "primereact/columngroup";
import { Row } from "primereact/row";
import { Column } from "primereact/column";
import { instituteDummyData } from '../../shared/data';
import { IoCallOutline} from "react-icons/io5";
import {AiOutlineWhatsApp,AiOutlineFileAdd} from "react-icons/ai";
import {CgMail} from "react-icons/cg"
import Paginator from "../../components/Paginator"
const RecivedLeadsTable = () => {

    const [data, setData] = useState(instituteDummyData)
    const [pageNo, setpageNo] = useState(1);
    const [pageSize, setpageSize] = useState(10)
    //console.log(data)
    const increment = () => {
        setpageNo(pageNo + 1);
    };
    const decrement = () => {
        setpageNo(pageNo - 1);
    };
    const pagesizechange = (e) => {
        setpageSize(e.target.value);
    };
    const headerGroup = (
        <ColumnGroup>
            <Row>
                <Column style={{ width: "3em" }}></Column>
                <Column
                    header="Sl"
                ></Column>
                <Column header="Interested In"></Column>
                <Column
                    header="Mobile"
                ></Column>
                <Column
                    header="Pin"
                ></Column>
                <Column header="City"></Column>
                <Column header="Name"></Column>
                <Column header="More Details"></Column>
                <Column header="Status"></Column>
                <Column header="Action"></Column>
            </Row>
        </ColumnGroup>
    );
    const actionTemplate = (item) => {
        return (
            < div className='flex' style={{ gap: "2px" }}>
                <button
                    className="icon-btn primary-btn"
                >
                    <IoCallOutline style={{Color:"yellow"}}/>
                </button>
                <button
                    className="icon-btn primary-btn"
                >
                    <AiOutlineWhatsApp/>
                </button>
                <button
                    className="icon-btn primary-btn"
                >
                    <CgMail />
                </button>
                <button
                    className="icon-btn primary-btn"
                >
                    <AiOutlineFileAdd />
                </button>
            </div>

        );
    };
    return (
        <>
            <div className="grid">
                {data ? (

                    <div className="col-12">
                        <DataTable
                            headerColumnGroup={headerGroup}
                            value={data}
                            responsiveLayout="scroll"
                            breakpoint="960px"
                        >
                            <Column
                                style={{ width: "3em" }}
                            />
                            <Column field="sl" />
                            <Column field="interested in" />
                            <Column field="mobile" />
                            <Column field="pin" />
                            <Column field="city" />
                            <Column field="name" />
                            <Column field="more details" />
                            <Column field="status" />
                            <Column body={actionTemplate} />
                        </DataTable>
                        {data.firstPage && data.lastPage ? null : (
                            <Paginator
                                pageSize={data.pageSize}
                                firstPage={data.firstPage}
                                lastPage={data.lastPage}
                                decrement={decrement}
                                increment={increment}
                                pagesizechange={pagesizechange}
                                pageNo={data.pageNo}
                                totalPages={data.totalPages}
                            />
                        )}
                    </div>
                ) : (
                    <div className="col-12">
                        Go Slow Turning Ahead
                    </div>
                )}
            </div>
        </>
    )
}

export default RecivedLeadsTable;
