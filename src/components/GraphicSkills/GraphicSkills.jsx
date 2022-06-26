import useUserSkills from "../../hooks/useUserSkills";
import "./graphic_skills.css"
import React from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis} from 'recharts';

const GraphicSkills = () => {

    const { data } = useUserSkills('18')

    const numberSkill = data?.data.kind

    const skillsName = {
        1: "Cardio",
        2: "Energie",
        3: "Endurance",
        4: "Force",
        5: "Vitesse",
        6: "Intensité",
    }


    return (

        <div className="graphic_skills_background">
            <RadarChart outerRadius={150} width={500} height={250}>
                <PolarGrid radialLines={false}/>
                <PolarAngleAxis axisLine={false} tickLine={false} dataKey="kind" data={data?.data.kind} />
                <Radar name="Mike" fill="#ff0000" fillOpacity={0.6} data={data?.data.data} dataKey="value" />
            </RadarChart>
    </div>
    );
}

export default GraphicSkills;
