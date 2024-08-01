// domains/timeline/playlist.view.jsx
import { FaPlaneArrival, FaPrayingHands, FaPaintBrush, FaUtensils } from 'react-icons/fa';
import SpotifyEmbed from "@/domains/playlist/playlist.spotify";

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

const PlaylistView = () => {
    return (
        <div id="timeline"
             className="w-full h-fit lg:h-[1020px] py-[80px] px-4 flex flex-col justify-center space-y-10 items-center bg-[#646C64]/[0.9] text-[#FFFDF2]">
            <h2 className="text-[35px] lg:text-[42px] font-bold font-fredoka text-center">
                Duby’s Birthday Playlist - Get familiar!
            </h2>
            <div className="w-[90vw] lg:w-[50vw]">
                <SpotifyEmbed/>
            </div>
        </div>
    );
};

export default PlaylistView;