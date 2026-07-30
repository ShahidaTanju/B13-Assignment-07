import { Archive, Clock3, Trash2 } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { TimelineContext } from "../Contexts/Context";
import { toast } from "react-toastify";

const FriendsDetails = () => {

    const { id } = useParams();

    const [friend, setFriend] = useState(null);

    useEffect(() => {
        fetch("/public/data.json")
            .then((res) => res.json())
            .then((data) => {
                const singleFriend = data.find(f => f.id === parseInt(id));
                setFriend(singleFriend);
            })
    }, [id]);

    const { timelineData, setTimelineData } = useContext(TimelineContext);

    const handleAddData = (type, friendDetails) => {
        const newData = {
            ...friendDetails,
            action: type,
            timestamp: new Date().toISOString()
        };

        setTimelineData([...timelineData, newData]);
        toast.success(`${type} with ${friendDetails.name}`);
    };


    if (!friend) {
        return <h2 className="text-center mt-20">Loading...</h2>
    };



    return (
        <div className="max-w-8xl mx-auto p-8 bg-gray-50">
            <div className="grid md:grid-cols-3 gap-8">

                {/* Left Card */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-xl p-8 text-center">

                    <img
                        src={friend.picture}
                        alt={friend.name}
                        className="w-20 h-20 rounded-full mx-auto"
                    />

                    <h2 className="text-2xl font-bold mt-2">
                        {friend.name}
                    </h2>

                    <button
                        className={`mt-2 px-4 py-1 rounded-full text-white text-sm ${friend.status === "Overdue"
                            ? "bg-red-500"
                            : friend.status === "Almost-Due"
                                ? "bg-yellow-500"
                                : "bg-blue-500"
                            }`}
                    >
                        {friend.status}
                    </button>

                    <div className="flex flex-wrap justify-center gap-2 mt-2">
                        {friend.tags?.map((tag, index) => (
                            <span
                                key={index}
                                className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <p className="text-gray-500 mt-4">
                        {friend.bio}
                    </p>
                    <div className="mt-5 space-y-4">
                        <button className="flex items-center justify-center gap-2 w-full border rounded-2xl p-3 bg-gray-100">
                            <Clock3 size={20} />
                            Snooze 2 Weeks
                        </button>
                        <button className="flex items-center justify-center gap-2 w-full border rounded-2xl p-3 bg-gray-100">
                            <Archive size={20} />
                            Archive
                        </button>
                        <button className="flex items-center justify-center gap-2 w-full text-red-500 border rounded-2xl p-3 bg-gray-100 ">
                            <Trash2 size={20} />
                            Delete
                        </button>
                    </div>
                </div>

                {/* Right Side */}
                <div className="md:col-span-2 space-y-6">

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-5">

                        <div className="bg-white rounded-2xl border border-gray-100 shadow-xl p-6 text-center">
                            <h2 className="text-3xl font-bold">
                                {friend.days_since_contact}
                            </h2>
                            <p className="text-gray-500 mt-4">
                                Days Since Contact
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl border border-gray-100 shadow-xl p-6 text-center">
                            <h2 className="text-3xl font-bold">
                                {friend.goal}
                            </h2>
                            <p className="text-gray-500 mt-4">
                                Goal (Days)
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl border border-gray-100 shadow-xl p-6 text-center">
                            <h2 className="text-3xl font-bold">
                                {friend.next_due_date}
                            </h2>
                            <p className="text-gray-500 mt-4">
                                Next Due
                            </p>
                        </div>

                    </div>

                    {/* Relationship Goal */}
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-xl p-6 flex justify-between items-center">

                        <div>
                            <h2 className="text-xl font-bold">
                                Relationship Goal
                            </h2>

                            <p className="text-gray-500 mt-4">
                                Connect every {friend.goal} days
                            </p>
                        </div>

                        <button className="text-blue-600 font-semibold hover:underline">
                            Edit
                        </button>

                    </div>

                    {/* Quick Check In */}
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-xl p-6">

                        <h2 className="text-xl font-bold mb-7">
                            Quick Check-in
                        </h2>

                        <div className="grid grid-cols-3 gap-6 text-center">

                            <button onClick={() => handleAddData("call", friend)} className="border flex flex-col items-center hover:bg-gray-100 transition rounded-xl p-4 ">
                                <img
                                    src="/src/assets/call.png"
                                    className="w-8 mx-auto"
                                    alt="Call"
                                />
                                <p className="mt-2 font-medium">Call</p>
                            </button>

                            <button onClick={() => handleAddData("text", friend)} className="border flex flex-col items-center hover:bg-gray-100 transition rounded-xl p-4 ">
                                <img
                                    src="/src/assets/text.png"
                                    className="w-8 mx-auto"
                                    alt="Text"
                                />
                                <p className="mt-2 font-medium">Text</p>
                            </button>

                            <button onClick={() => handleAddData("video", friend)} className="border flex flex-col items-center hover:bg-gray-100 transition rounded-xl p-4 ">
                                <img
                                    src="/src/assets/video.png"
                                    className="w-8 mx-auto"
                                    alt="Video"
                                />
                                <p className="mt-2 font-medium">Video</p>
                            </button>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
}

export default FriendsDetails;