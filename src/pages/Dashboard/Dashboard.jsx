import './dashboard.css'
import { Menu, TrackingActivity } from "../../components";
import React from "react";

function Dashboard () {

    return (
    <div className='dashboard_background'>
        <div className='dashboard_user_components_position'>
            <TrackingActivity/>
        </div>
    </div>
    )
};
export default Dashboard;