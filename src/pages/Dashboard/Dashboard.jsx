import './dashboard.css'
import { TrackingActivity } from "../../components";
import React, {useState} from "react";

function Dashboard () {

    const options = [
        {value: '', text: "--Choisissez un utilisateur--"},
        {value: '12', text: "Utilisateur 12"},
        {value: '18', text: "Utilisateur 18"},
    ];
    const [userType, setUserType] = useState(options[0].value)
    const handleChangeUserType = event => {
        console.log(event.target.value);
        setUserType(event.target.value);
    }
    return (
    <div className='dashboard_background'>
        <div className='dashboard_user_components_position'>
            <select value={userType} onChange={handleChangeUserType}>
                {options.flatMap(option =>
                    <option key={option.value} value={option.value}>{option.text}</option>
                )}
            </select>
            <TrackingActivity userId={handleChangeUserType}/>
        </div>
    </div>
    )
};
export default Dashboard;