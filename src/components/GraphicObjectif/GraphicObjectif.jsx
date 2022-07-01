import useUser from "../../hooks/useUser";
import "./graphic_objectif.css"
import React from "react";
import { RadialBarChart, RadialBar} from 'recharts';

const GraphicObjectif = () => {

    const { data } = useUser('18')

    return (
        <div className="graphic_objectif_background">
            <label className="graphic_objectif_title">Score {data.data.userInfos.score * 100} %</label>
            <RadialBarChart
                cx="50%" 
                cy="50%"
                innerRadius={75}
                barSize={10}
                data={data?.data.userInfos}
                >
                <RadialBar
                    cornerRadius={10}
                    fill="#ff0000"
                    dataKey="score"
                />
            </RadialBarChart>
        </div>
    );
}

export default GraphicObjectif;
