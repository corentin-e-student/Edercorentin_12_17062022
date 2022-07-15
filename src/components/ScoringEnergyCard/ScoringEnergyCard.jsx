/* import useUser from "../../hooks/useUser"; */
import "./scoring_energy_card.css"
import React from "react";
import PropTypes from 'prop-types';

const ScoringEnergyCard = ({energyName, energyValue}) => {

    const backgrounColorType = (energyName) => {
        if(energyName === "Calories") {
            return "#FBEAEA"
        } else if (energyName === "Proteines") {
            return "#E9F4FB"
        } else if (energyName === "Glucides") {
            return "#FAF6E5"
        } else if (energyName === "Lipides") {
            return "#FBEAEF"
        }
    }
    
    const unitType = (energyName) => {
        if(energyName === "Calories") {
            return "KCal"
        } else if (energyName === "Proteines") {
            return "g"
        } else if (energyName === "Glucides") {
            return "g"
        } else if (energyName === "Lipides") {
            return "g"
        }
    }
    
    /* const iconType = (energyName) => {
        if(energyName === "Calories") {
            return <FontAwesomeIcon icon="fa-solid fa-fire-flame-curved" style={{fill:"#FF0000"}} />
        } else if (energyName === "Proteines") {
            return <FontAwesomeIcon icon="fa-solid fa-drumstick" style={{fill:"#4AB8FF"}} />
        } else if (energyName === "Glucides") {
            return <FontAwesomeIcon icon="fa-solid fa-apple-whole" style={{fill:"#FDCC0C"}} />
        } else if (energyName === "Lipides") {
            return <FontAwesomeIcon icon="fa-solid fa-burger" style={{fill:"#FD5181"}} />
        }
    } */

    return (
        <div className="scoring_energy_card_background">
            <div className="scoring_energy_card_background_icon" style={{backgroundColor: backgrounColorType(energyName)}}>
                W
            </div>
            <div className="scoring_energy_scoring_items_position">
                <label className="scoring_energy_value">{energyValue} {unitType(energyName)}</label>
                <label className="scoring_energy_name">{energyName}</label>
            </div>
        </div>
    )
};

export default ScoringEnergyCard;

ScoringEnergyCard.propTypes = {  energyValue: PropTypes.number};