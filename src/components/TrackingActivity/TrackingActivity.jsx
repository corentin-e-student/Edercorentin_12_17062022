import useUser from "../../hooks/useUser";
import "./tracking_activity.css"
import React from "react";

const TrackingActivity = () => {
    const { data, isSuccess } = useUser()

    return (

        <div className="tracking_items_positions">
            <span> API</span>

            {isSuccess &&
                <div className="tracking__welcome_items_position">
                    <label className="tracking_title_welcome_bold">Bonjour <span className="tracking_user_name">{data.data.userInfos.firstName}</span></label>
                    <label className="tracking_message">Félicitation ! Vous avez explosé vos objectifs hier 👏</label>
                </div>
            }

        </div>
    );
}

export default TrackingActivity;
