import useUser from "../../hooks/useUser";
import "./graphic_activity.css"
import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const GraphicActivity = () => {
    const { data, isSuccess } = useUser()

    return (

        <div>
            {isSuccess &&
                <div>
                    <BarChart width={500} height={300} data={data} margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5
                        }}
                        className=""
                        >
                        <CartesianGrid vertical=""/>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="pv" fill="#8884d8" />
                        <Bar dataKey="uv" fill="#82ca9d" />
                        </BarChart>
                </div>
            }

        </div>
    );
}

export default GraphicActivity;
