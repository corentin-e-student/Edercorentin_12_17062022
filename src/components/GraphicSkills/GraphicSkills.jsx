import useUserSkills from "../../hooks/useUserSkills";
import "./graphic_skills.css"
import React from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis} from 'recharts';


const GraphicSkills = () => {

    const { data } = useUserSkills('18')

    return (

        <div className="graphic_skills_background">
            <RadarChart width={320} height={320}>
                <PolarGrid radialLines={false}/>
                <PolarAngleAxis axisLine={false} tickLine={false} data={data?.data.kind} dataKey="kind"/>
                <Radar name="Mike" fill="#ff0000" fillOpacity={0.6} data={data?.data.data} dataKey="value" />
            </RadarChart>
        </div>
    );
}

export default GraphicSkills;
