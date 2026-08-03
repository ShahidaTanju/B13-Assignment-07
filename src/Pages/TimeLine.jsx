import { useContext, useState } from "react";
import { TimelineContext } from "../Contexts/Context";
import callIcon from "../assets/call.png";
import videoIcon from "../assets/video.png";
import textIcon from "../assets/text.png";

const getIcon = (type) => {
    switch (type.toLowerCase()) {
        case "call":
            return callIcon;
        case "video":
            return videoIcon;
        case "text":
            return textIcon;
        default:
            return callIcon;
    }
};


const TimeLine = () => {

    const { timelineData } = useContext(TimelineContext);

    const [filter, setFilter] = useState("All");

    const filterData =
        filter === "All"
            ? timelineData
            : timelineData.filter(item => item.action.toLowerCase() === filter.toLocaleLowerCase());

    return (
        <div className="max-w-2xl mx-auto p-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold">Timeline</h2>
                <select className="border rounded-lg px-4 py-2 outline-none"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}>
                    <option value="All">Filter Timeline</option>
                    <option value="Call">Call</option>
                    <option value="Text">Text</option>
                    <option value="Video">Video</option>
                </select>
            </div>

            <div className="space-y-3">
                {filterData
                    .slice()
                    .reverse()
                    .map((item, index) => (
                        <div
                            key={index}
                            className="flex items-start gap-4 bg-white border rounded-xl p-4 hover:bg-gray-50 transition"
                        >
                            {/* Icon */}
                            <img
                                src={getIcon(item.action)}
                                alt={item.action}
                                className="w-10 h-10 object-contain"
                            />

                            {/* Content */}
                            <div>
                                <h3 className="font-semibold text-lg text-gray-800">
                                    {item.action} with {item.name}
                                </h3>

                                <p className="text-sm text-gray-500">
                                    {new Date(item.timestamp).toLocaleDateString("en-US", {
                                        weekday: "short",
                                        month: "short",
                                        day: "numeric",
                                        year: "numeric",
                                    })}
                                </p>

                                <p className="text-xs text-gray-400">
                                    {new Date(item.timestamp).toLocaleTimeString([], {
                                        hour: "2-digit",
                                        minute: "2-digit",
                                    })}
                                </p>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default TimeLine;