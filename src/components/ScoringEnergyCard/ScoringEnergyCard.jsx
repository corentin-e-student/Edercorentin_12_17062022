/* import useUser from "../../hooks/useUser"; */
import "./scoring_energy_card.css"
import React from "react";

const ScoringEnergyCard = ({energyName, energyValue}) => {

    const backgrounColorType = {
        "Calories" : "#FBEAEA",
        "Proteines" : "#E9F4FB",
        "Glucides" : "#FAF6E5",
        "Lipides" : "#FBEAEF"
    }

    return (
        <div className="scoring_energy_card_background">
            <div className="scoring_energy_card_background_icon" style={{backgroundColor: backgrounColorType.Calories}}>
                W
            </div>
            <div className="scoring_energy_scoring_items_position">
                <label>{energyValue}</label>
                <label>{energyName}</label>
            </div>
        </div>
    )
};

export default ScoringEnergyCard;