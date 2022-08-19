import useUser from "../../hooks/useUser";
import "./graphic_objectif.css"
import React from "react";
import { RadialBarChart, RadialBar, PolarAngleAxis} from 'recharts';
import PropTypes from 'prop-types';

/**
 * Represents graphic objectif.
 * @param {array} data - Array of objectif element.
 * @param {number} valueScoring - Score of objectif.
 * @param {number} scoreCalc - Score in percent.
 * @param {number} getValueScoring - Display of score in percent.
 * @param {number} value - Value of score for radial bar.
 * @returns {JSX}
 */

const GraphicObjectif = () => {

    const { data } = useUser('12')

    const valueScoring = data?.data.userInfos.todayScore;
    const scoreCalc = valueScoring * 100;
    

    const getValueScoring = [
        { value: scoreCalc }
    ];

    return (
        <div className="graphic_objectif_background">
            <label className="graphic_objectif_title">Score</label>
            <div className="graphic_objectif_bubble_info">
                <label className="bubble_info_scoring">{scoreCalc} %</label>
                <label className="bubble_info_text">de votre objectif</label>
            </div>
            <RadialBarChart
            width={258}
            height={258}
            innerRadius={800}
            outerRadius={100}
            barSize={8}
            data={getValueScoring}
            startAngle={100}
            endAngle={-270}
            >
                <PolarAngleAxis
                type="number"
                domain={[0, 100]}
                angleAxisId={0}
                tick={false}
                />
                <RadialBar
                background
                clockWise
                dataKey="value"
                fill="#ff0000"
                cornerRadius={10}
                />
            </RadialBarChart>
        </div>
    );
}

export default GraphicObjectif;

GraphicObjectif.propTypes = {
    scoreCalc: PropTypes.number,
    getValueScoring: PropTypes.number,
}
