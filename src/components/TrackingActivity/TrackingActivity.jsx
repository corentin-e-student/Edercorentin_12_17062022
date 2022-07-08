import useUser from "../../hooks/useUser";
import "./tracking_activity.css"
import React from "react";
import GraphicActivity from "../GraphicActivity/GraphicActivity";
import GraphicSession from "../GraphicSession/GraphicSession";
import GraphicSkills from "../GraphicSkills/GraphicSkills";
import GraphicObjectif from "../GraphicObjectif/GraphicObjectif";
import ScoringEnergyCard from "../ScoringEnergyCard/ScoringEnergyCard";

const TrackingActivity = () => {
    const { data, isSuccess } = useUser('18')
    console.log(data)
    return (

        <div>
            {isSuccess &&
                <div className="tracking__welcome_items_position">
                    <label className="tracking_title_welcome_bold">Bonjour <span className="tracking_user_name">{data.data.userInfos.firstName}</span></label>
                    <label className="tracking_message">Félicitation ! Vous avez explosé vos objectifs hier 👏</label>
                    <div className="tracking_items_position">
                        <div className="tracking_graphic_items_position_column">
                            <GraphicActivity />
                            <div className="tracking_graphic_items_position_row">
                                <GraphicSession/>
                                <GraphicSkills/>
                                <GraphicObjectif/>
                            </div>
                        </div>
                        <div className="tracking_scoring_items_position">
                            {/* {data.data.keyDatas.map(keyData => ( */}
                                <ScoringEnergyCard energyName="Calories" energyValue={data.data.keyData.calorieCount}/>
                            {/* ))} */}
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default TrackingActivity;
