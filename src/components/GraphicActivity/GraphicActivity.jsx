import useUser from "../../hooks/useUser";
import "./graphic_activity.css"
import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const GraphicActivity = () => {
    const { data, isSuccess } = useUser()

    return (

        <div className="graphic_activity_background">
            <label className="graphic_activity_title">Activité quotidienne</label>
            {isSuccess &&
                <BarChart width={500} height={300} data={data}>
                    <CartesianGrid vertical=""/>
                    <XAxis dataKey="name" />
                    <YAxis tickLine="" axisLine="" orientation="right"/>
                    <Tooltip />
                    <Legend verticalAlign="top" align="right" height= {80} />
                    <Bar dataKey="kilogram" fill="#282D30" />
                    <Bar dataKey="calories" fill="#E60000" />
                </BarChart>
            }

        </div>
    );
}

export default GraphicActivity;
