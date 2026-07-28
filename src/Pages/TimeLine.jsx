import { useContext } from "react";
import { TimelineContext } from "../Contexts/Context";


const TimeLine = () => {

    const { timelineData } = useContext(TimelineContext);

    console.log(timelineData);

    return (
        <div>
            timeline
        </div>
    );
};

export default TimeLine;