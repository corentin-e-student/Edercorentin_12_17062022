import useUserActivity from "../../hooks/useUserActivity";
import "./graphic_activity.css"
import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from "recharts";

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

const GraphicActivity = () => {

    const { data } = useUserActivity('18')

    return (

        <div className="">
            <label className="">Activité quotidienne</label>
            <BarChart width={700} height={225} data={data?.data.sessions}>
                <CartesianGrid strokeDasharray="4" vertical=""/>
                <XAxis dataKey="session" tickLine={false}/>
                <YAxis tickLine={false} axisLine={false} orientation="right"/>
                <Tooltip content={<CustomTooltip/>}/>
                <Legend verticalAlign="top" align="right" height= {80} />
                <Bar radius={[10, 10, 0, 0]} barSize={10} dataKey="kilogram" fill="#282D30" unit=" kg" />
                <Bar radius={[10, 10, 0, 0]} barSize={10} dataKey="calories" fill="#E60000" unit=" kCal" />
            </BarChart>
    </div>
    );
}

export default GraphicActivity;
