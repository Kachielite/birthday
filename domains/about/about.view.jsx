import Image from "next/image";
import AboutDetails from "./about.details";
import Duby from "@/public/assets/images/duby.jpeg";


const AboutView = () => {
    return (
        <div id="about" className="w-full bg-white h-fit lg:h-[730px] flex flex-col lg:flex-row justify-center items-center space-y-6 lg:space-y-0 lg:space-x-20 py-8 px-4 lg:px-20">
            <div className="w-full lg:w-[50%]">
                <AboutDetails />
            </div>
            <div className="w-full lg:w-fit relative">
                <div className="h-[320px] w-[320px] lg:h-[520px] lg:w-[520px] rounded-full flex justify-center items-center overflow-hidden relative">
                    <Image src={Duby} alt="Duby" layout="fill" objectFit="cover" objectPosition="center" />
                </div>
            </div>
        </div>
    );
}

export default AboutView;