import './dashboard.css'
import useUser from '../../hooks/useUser';
import { Menu, TrackingActivity } from "../../components";
import React from "react";

function Dashboard () {
    const { data, isSuccess } = useUser()
    return (
    <div className='dashboard_background'>
        <div className='dashboard_menu_component_position'>
            <Menu/>
        </div>
        <div className='dashboard_user_components_position'>
            <TrackingActivity/>
        </div>
    </div>
    )
};
export default Dashboard;