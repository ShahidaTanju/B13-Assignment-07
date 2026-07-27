import { useEffect, useState } from "react";
import { Link } from "react-router";

const FriendsCard = () => {

    const [friends, setFriends] = useState([]);

    useEffect(() => {
        fetch('/public/data.json')
            .then(res => res.json())
            .then(data => setFriends(data));
    }, []);

    console.log(friends);

    return (
        <div className="bg-gray-100 p-6 rounded-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {friends.map((friend) => (
                    <Link to={`friendDetails/${friend.id}`}>
                        <div
                            key={friend.id}
                            className="bg-white rounded-xl shandow p-6 text-center">
                            <img
                                src={friend.picture}
                                alt={friend.name}
                                className="w-20 h-20 rounded-full mx-auto object-cover"
                            />
                            <h2 className="text-xl font-semibold mt-4">{friend.name}</h2>
                            <p className="text-gray-400 text-sm">{friend.days_since_contact}d ago</p>
                            <div className="flex flex-wrap justify-center gap-2 mt-2">
                                {friend.tags?.map((tag, index) => (
                                    <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">{tag}</span>
                                ))}
                            </div>
                            <button className={`mt-4 px-4 py-1 rounded-full text-white text-sm ${friend.status === "Overdue"
                                ? "bg-red-500"
                                : friend.status === "Almost-Due"
                                    ? "bg-yellow-500"
                                    : "bg-blue-600"}`}>{friend.status}</button>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default FriendsCard;