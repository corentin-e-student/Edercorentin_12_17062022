import useUserSession from "../../hooks/useUserSession";
import "./graphic_session.css"
import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Dot} from "recharts";

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length > 0) {
      return (
        <div className="graphic_session_custom_tooltip">
          <label className="graphic_session_custom_value">{`${payload[0].value} min`}</label>
        </div>
      )
    }
    return null;
}

const CustomDots = ({ cx, cy }) => {
return (
    <g>
    <Dot r={10} fill='white'cy={cy} cx={cx} opacity='0.3'/>
    <Dot r={4} fill='white'cy={cy} cx={cx}/>
    </g>
)
}

const GraphicSession = () => {

    const { data } = useUserSession('18')

    return (

        <div className="graphic_session_background">
            <label className="graphic_session_title">Durée moyenne des sessions</label>
            <LineChart width={200} height={150} data={data?.data.sessions}>
                <CartesianGrid vertical="" horizontal="" />
                <XAxis dataKey="day"  tickLine={false} axisLine={false} stroke="rgba(255, 255, 255, 0.681)" />
                <YAxis hide="true" tickLine={false} axisLine={false} />
                <Tooltip content={<CustomTooltip/>} />
                <Line strokeWidth="2"  strokeOpacity="0.8" isAnimationActive={true} type="monotone" dataKey="sessionLength" stroke="#FFFFFF" dot={false} activeDot={<CustomDots/>} />
            </LineChart>
    </div>
    );
}

export default GraphicSession;
