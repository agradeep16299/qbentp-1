import React, { useEffect, useState, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { leadAllocationFind } from '../../../shared/data';
import { Toast } from 'primereact/toast';
const CheckboxTable = (props) => {
    const [products, setProducts] = useState(leadAllocationFind);
    const toast = useRef(null);
    const phoneNoTemplate = (products) => {
        let phoneNumber = `${products.phoneNo}/${products.altPhoneNo}`
        return phoneNumber
    }
    const productId = (products) => {
        let Id = `${products.id}`
        return Id
    }
    return (
        <div className='mt-3 mb-5'>
            <div className="datatable-selection-demo">
                <Toast ref={toast} />
                <DataTable value={products} selectionMode="radiobutton" selection={props.agent} onSelectionChange={e => props.handelSelectedAgent(e.value)} dataKey="id" responsiveLayout="scroll">
                    <Column selectionMode="single" headerStyle={{ width: '3em' }}></Column>
                    <Column field={productId} header="Id"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field={phoneNoTemplate} header="Phone No"></Column>
                    <Column field="place" header="Place"></Column>
                    <Column field="pin" header="Pin"></Column>
                    <Column field="type" header="Type"></Column>
                </DataTable>

            </div>
        </div>


    )
}

export default CheckboxTable
