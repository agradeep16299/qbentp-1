import React from 'react'
import { Button } from "primereact/button"
import { MdOutlineCancel } from "react-icons/md";

const CancelLead = () => {
    
  return (
    <div>
       <Button
                label="Close"
                icon={<MdOutlineCancel style={{ fontSize: 22 }} />}
                iconPos="left"
                className="disabled-btn"
               
            />
    </div>
  )
}

export default CancelLead
