import useUser from "../../hooks/useUser";
import "./tracking_activity.css"
import React from "react";
import GraphicActivity from "../GraphicActivity/GraphicActivity";

const TrackingActivity = () => {
    const { data, isSuccess } = useUser('18')

    return (

        <div className="tracking_items_positions">
            <span> API</span>

            {isSuccess &&
                <div className="tracking__welcome_items_position">
                    <label className="tracking_title_welcome_bold">Bonjour <span className="tracking_user_name">{data.data.userInfos.firstName}</span></label>
                    <label className="tracking_message">Félicitation ! Vous avez explosé vos objectifs hier 👏</label>
                    <div>
                        <div className="tracking_graphic_items_position_column">
                            <GraphicActivity data={data} />
                            <div className="tracking_graphic_items_position_row">
                            </div>
                        </div>
                    </div>

                </div>
            }

        </div>
    );
}

export default TrackingActivity;
