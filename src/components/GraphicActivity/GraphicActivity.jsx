import useUserActivity from "../../hooks/useUserActivity";
import "./graphic_activity.css"
import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from "recharts";
import PropTypes from 'prop-types';

/**
 * Represents graphic activity.
 * @param {array} data - Array of activity result by sessions.
 * @param {string} data.session - Day of session activity
 * @param {number} data.kilogram - Height by sessions
 * @param {number} data.calories - Calories used by sessions
 * @param {number} data.calories - Calories used by sessions
 * @returns {JSX}
 */

const CustomTooltip = ({ payload, active }) => {
    if (active) {
        return (
            <div className="graphic_activity_custom_tooltip">
                <label className="graphic_activity_custom_value_kilogram">{payload[0].value} kg</label>
                <label className="graphic_activity_custom_value_calories">{payload[1].value} Kcal</label>
            </div>
        )
    }
    return null
}

const GraphicActivity = ({userId}) => {

    const { data } = useUserActivity(userId)

    return (

        <div className="graphic_activity_background">
            <label className="graphic_activity_title">Activité quotidienne</label>
            <div className="graphic_activity_position">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data?.data.sessions}>
                        <CartesianGrid strokeDasharray="2" vertical={false}/>
                        <XAxis dataKey="session" tickLine={false}/>
                        <YAxis tickCount={3} tickLine={false} axisLine={false} orientation="right"/>
                        <Tooltip content={<CustomTooltip/>}/>
                        <Legend verticalAlign="top" align="right" height= {80} />
                        <Bar radius={[10, 10, 0, 0]} barSize={10} dataKey="kilogram" fill="#282D30" unit=" kg" />
                        <Bar radius={[10, 10, 0, 0]} barSize={10} dataKey="calories" fill="#E60000" unit=" kCal" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default GraphicActivity;

CustomTooltip.propTypes = {
    payload: PropTypes.array,
    active: PropTypes.bool
}

GraphicActivity.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
          session: PropTypes.string,
          kilogram: PropTypes.number,
          calories: PropTypes.number,
        })
      ).isRequired,
}
