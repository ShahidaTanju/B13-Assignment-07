import { useContext } from "react";
import { TimelineContext } from "../Contexts/Context";

import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";

const Colours = ["#6C63FF", "#4CAF90", "#2C3E50"];

const Stats = () => {

    const { timelineData } = useContext(TimelineContext);

    console.log(timelineData);

    const chartData = [
        {
            name: "Text",
            value: timelineData.filter((item) => item.action.toLowerCase() === "text").length,
        },

        {
            name: "Video",
            value: timelineData.filter((item) => item.action.toLowerCase() === "video").length,
        },

        {
            name: "Call",
            value: timelineData.filter((item) => item.action.toLowerCase() === "call").length,
        },
    ];

    return (
        <div className="max-w-6xl mx-auto px-6 py-8">
            <h1 className="text-4xl font-bold mb-5">Frienship Analytics</h1>
            <div className="bg-white rounded-xl border p-5 shadow-sm">
                <p className="text-gray-500 mb-5">By Interaction Type</p>
                <div className="h-[380px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie data={chartData}
                                dataKey="value"
                                nameKey="name"
                                innerRadius={80}
                                outerRadius={100}
                                paddingAngle={6} >
                                {chartData.map((entry, index) => (
                                    <Cell key={index} fill={Colours[index]}></Cell>
                                ))}
                            </Pie>
                            <Legend verticalAlign="bottom"
                                align="center"
                                iconType="circle"
                            >
                            </Legend>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default Stats;