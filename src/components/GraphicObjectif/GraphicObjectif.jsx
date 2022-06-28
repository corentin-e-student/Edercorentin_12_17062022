import useUser from "../../hooks/useUser";
import "./graphic_objectif.css"
import React from "react";
import { RadialBarChart, RadialBar, ResponsiveContainer} from 'recharts';

const GraphicObjectif = () => {

    const { data } = useUser('18')

    return (
        <div className="graphic_objectif_background">
            <label className="graphic_objectif_title">Score</label>
            <ResponsiveContainer width='99%' height='100%'>
                <RadialBarChart
                    innerRadius={75}
                    outerRadius={85}
                    startAngle={80}
                    endAngle={360 + 80}
                    barSize={10}
                    data={data?.data.userInfos}
                    >
                    <RadialBar
                        cornerRadius={10}
                        fill="#ff0000"
                        dataKey="score"
                    />
                </RadialBarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default GraphicObjectif;
