import React, { useState, useEffect } from "react";
import { TabView, TabPanel } from "primereact/tabview";
import SubmitedLeadsTable from './SubmitedLeadsTable';
import RecivedLeadsTable from "./RecivedLeadsTable";
import { Button } from "primereact/button";
import SearchLead from "./component/SearchLead";
import CancelLead from "./component/CancelLead";
import SearchToggleContent from "./component/SearchToggleContent";
import SubmitNewLeadDialog from "./component/SubmitNewLeadDialog";
import AllocateLeadDialog from "./component/AllocateLeadDialog";
import { Dialog } from "primereact/dialog";
const SearchFinancialInstitute = () => {
    const [toggle, setToggle] = useState(false)
    const [dialog, setDialog] = useState(false)
    const [allocateLeadDialog, setAllocateLeadDialog] = useState(false)
    //create lead
    const getProfileDetails = (item) => {
        setDialog(true)
    }
    const cancelButton = (item) => {
        setDialog(false)
    }
    //allocate Lead
    const allocateLead = (item) => {
        setAllocateLeadDialog(true)
    }
    const allocateCancelButton=(item)=>{
        setAllocateLeadDialog(false)
    }
   
    return (
        <>
            <div className="col">
                <div className="w-full flex flex-wrap justify-content-between align-items-center">
                    {toggle ? <h2 className="m-0" style={{ fontSize: 25 }}>Search Lead</h2> : <h2 className="m-0" style={{ fontSize: 25 }}>Leads (display a per user role)</h2>}

                    <div onClick={() => setToggle(!toggle)}>{toggle ? <CancelLead /> : <SearchLead />}</div>
                </div>
                <div className="w-full">
                    {
                        toggle && (
                            <SearchToggleContent />
                        )
                    }
                </div>
            </div>
            <div className="grid justify-content-end mb-1">
                <div className="md:col-6 col-12">
                    <div className="w-full flex flex-wrap justify-content-end align-items-center">
                        <Button label="Allocate Leads" icon="pi pi-arrow-up-right" className="p-button-raised mr-2" onClick={() => allocateLead()} />
                        <Button label="Upload Leads In Bulk" icon="pi pi-upload" className="p-button-raised  mr-2" />
                        <Button label="Create New Lead" icon="pi pi-plus" className="p-button-raised mr-2" onClick={() => getProfileDetails()} />
                    </div>
                </div>
            </div>


            <TabView className="customtabview">
                <TabPanel header="Recived Leads">
                    <RecivedLeadsTable />
                </TabPanel>
                <TabPanel header="Submitted leads">
                    <SubmitedLeadsTable />
                </TabPanel>
            </TabView>

            <Dialog
                header="Create New Lead"
                visible={dialog}
                onHide={() => setDialog(false)}
                breakpoints={{ "960px": "97vw" }}
                style={{ width: "65vw" }}

            >
                <SubmitNewLeadDialog cancelButton={cancelButton} />
            </Dialog>
            <Dialog
                header="Lead Allocation"
                visible={allocateLeadDialog}
                onHide={() => setAllocateLeadDialog(false)}
                breakpoints={{ "960px": "97vw" }}
                style={{ width: "65vw" }}
            >
                <AllocateLeadDialog allocateCancelButton={allocateCancelButton} />
            </Dialog>

        </>
    )
}

export default SearchFinancialInstitute
