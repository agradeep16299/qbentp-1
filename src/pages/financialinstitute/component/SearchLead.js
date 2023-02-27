import React from 'react'

import { Button } from "primereact/button"
import { AiOutlineSearch } from "react-icons/ai";

const SearchLead = () => {
    
    return (
        <div>
            <Button 
                label="Search Lead"
                icon={<AiOutlineSearch style={{ fontSize: 22 }} />}
                iconPos="left"
                className="disabled-btn"
                
            />
        </div>
    )
}

export default SearchLead
