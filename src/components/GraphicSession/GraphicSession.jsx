import useUserSession from "../../hooks/useUserSession";
import "./graphic_session.css"
import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from "recharts";

const GraphicSession = () => {

    const { data } = useUserSession('18')

    return (

        <div className="graphic_session_background">
            <label className="graphic_session_title">Durée moyenne des sessions</label>
            <LineChart width={200} height={150} data={data?.data.sessions}>
                <CartesianGrid vertical="" horizontal="" />
                <XAxis dataKey="day"  tickLine="" axisLine="" stroke="rgba(255, 255, 255, 0.681)" />
                <YAxis hide="true" tickLine="" axisLine="" />
                <Tooltip />
                <Line type="monotone" dataKey="sessionLength" stroke="#FFFFFF" />
            </LineChart>
    </div>
    );
}

export default GraphicSession;
