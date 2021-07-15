import React from 'react'
import './Sidebar.css'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <AddCircleOutlineIcon  />
                <h6>ERP</h6>
            </div>
            <div className="sidebar__items">
                <i class="fas fa-balance-scale"></i>
                <p>Unit Master</p>
            </div>

        </div>
    )
}

export default Sidebar;
