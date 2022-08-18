/* import useUser from "../../hooks/useUser"; */
import "./scoring_energy_card.css"
import React from "react";
import PropTypes from 'prop-types';
import Fire from '../../asset/icons/calorie-icon.svg'
import Chicken from '../../asset/icons/proteine-icon.svg'
import Apple from '../../asset/icons/glucide-icon.svg'
import Burger from '../../asset/icons/lipide-icon.svg'

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
    
    const iconType = (energyName) => {
        if(energyName === "Calories") {
            return Fire
        } else if (energyName === "Proteines") {
            return Chicken
        } else if (energyName === "Glucides") {
            return Apple
        } else if (energyName === "Lipides") {
            return Burger
        }
    }

    return (
        <div className="scoring_energy_card_background">
            <div className="scoring_energy_card_background_icon" style={{backgroundColor: backgrounColorType(energyName)}}>
                <img src={iconType(energyName)} alt="logo Sportsee" className='scoring_energy_icon' />
            </div>
            <div className="scoring_energy_scoring_items_position">
                <label className="scoring_energy_value">{energyValue} {unitType(energyName)}</label>
                <label className="scoring_energy_name">{energyName}</label>
            </div>
        </div>
    )
};

export default ScoringEnergyCard;

ScoringEnergyCard.propTypes = { 
    energyValue: PropTypes.number,
    energyName: PropTypes.string,
};