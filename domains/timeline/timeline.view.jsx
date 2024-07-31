// domains/timeline/timeline.view.jsx
import { FaPlaneArrival, FaPrayingHands, FaPaintBrush, FaUtensils } from 'react-icons/fa';

const TIMELINE = [
    {
        id: 1,
        activity: "Arrival",
        icon: <FaPlaneArrival color="#FFFDF2" size={48} />,
        time: "17:00",
    },
    {
        id: 2,
        activity: "Worship",
        icon: <FaPrayingHands color="#FFFDF2" size={48} />,
        time: "20:00",
    },
    {
        id: 7,
        activity: "Sip and Paint",
        icon: <FaPaintBrush color="#FFFDF2" size={48} />,
        time: "21:30",
    },
    {
        id: 8,
        activity: "Dinner",
        icon: <FaUtensils color="#FFFDF2" size={48} />,
        time: "22:00",
    },
];

const TimelineView = () => {
    return (
        <div id="timeline" className="w-full h-fit lg:h-[421px] py-[80px] px-4 flex flex-col lg:flex-row justify-center lg:justify-evenly space-y-8 lg:space-y-0 items-center bg-[#646C64]/[0.9] text-[#FFFDF2]">
            {TIMELINE.map((item) => (
                <div key={item.id} className="flex flex-col justify-center items-center">
                    {item.icon}
                    <p className="text-[50px] font-fredoka font-extrabold py-7">{item.time}</p>
                    <p className="text-2xl font-bold">{item.activity}</p>
                    <div className="h-[1px] w-[24px] bg-[#FFFDF2] mt-3"/>
                </div>
            ))}
        </div>
    );
};

export default TimelineView;