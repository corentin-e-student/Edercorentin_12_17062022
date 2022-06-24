import useUserActivity from "../../hooks/useUserActivity";
import "./graphic_activity.css"
import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from "recharts";

const GraphicActivity = () => {

    const { data } = useUserActivity('18')

    return (

        <div className="graphic_activity_background">
            <label className="graphic_activity_title">Activité quotidienne</label>
            <BarChart width={700} height={225} data={data?.data.sessions}>
                <CartesianGrid strokeDasharray="4" vertical=""/>
                <XAxis dataKey="session" tickLine=""/>
                <YAxis tickLine="" axisLine="" orientation="right"/>
                <Tooltip />
                <Legend verticalAlign="top" align="right" height= {80} />
                <Bar radius={[10, 10, 0, 0]} barSize={10} dataKey="kilogram" fill="#282D30" unit=" kg" />
                <Bar radius={[10, 10, 0, 0]} barSize={10} dataKey="calories" fill="#E60000" unit=" kCal" />
            </BarChart>
    </div>
    );
}

export default GraphicActivity;
