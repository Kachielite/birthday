import LocationInfo from "@/domains/location/location.info";
import LocationMap from "@/domains/location/location.map";


const LocationView = () => {
    return (
        <div id="venue" className="w-full bg-[#FFFDF2] h-fit lg:h-[730px] flex flex-col lg:flex-row justify-center items-center space-y-10 lg:space-y-0 lg:space-x-20 mt-14 lg:mt-0 py-20 lg:py-8 px-4 lg:px-20">
            <div className="w-full lg:w-[50%]">
                <LocationInfo/>
            </div>
            <div className="w-full lg:w-[50%] rounded-xl overflow-hidden">
                <LocationMap/>
            </div>
        </div>
    );
}

export default LocationView;