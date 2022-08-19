import useUserSkills from "../../hooks/useUserSkills";
import "./graphic_skills.css"
import React from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis} from 'recharts';
import PropTypes from 'prop-types';


/**
 * Represents graphic skills.
 * @param {array} data - Array of user skills.
 * @param {number} data.value - Values skills.
 * @param {string} data.kind - Skills names.
 * @returns {JSX}
 */


const GraphicSkills = () => {
    const { data } = useUserSkills('12')

    return (
        <div className="graphic_skills_background">
            <RadarChart width={320} height={320}>
                <PolarGrid radialLines={false}/>
                <PolarAngleAxis axisLine={false} tickLine={false} data={data?.data} dataKey="kind" tick={{fill: 'white', fontSize: 10, angle: 0 }}/>
                <Radar name="Mike" fill="#ff0000" fillOpacity={0.6} data={data?.data} dataKey="value" />
            </RadarChart>
        </div>
    );
}

/* GraphicSkills.propTypes = {  
    dataArray: propTypes.array,
};  */

export default GraphicSkills;

GraphicSkills.prototype = {
    data: PropTypes.arrayOf(
      PropTypes.shape({
        kind: PropTypes.number,
        value: PropTypes.number,
      })
    ).isRequired,
  }

