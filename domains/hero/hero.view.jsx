import Image from "next/image";
import Duby from "@/public/assets/images/duby2.png";
const HeroView = () => {
    return (
        <div className="w-screen h-[840px] flex flex-row relative">
            <div className="w-1/2 h-full bg-cover bg-center" style={{ backgroundImage: `url('/assets/images/worship.png')` }}></div>
            <div className="w-1/2 h-full bg-cover bg-center" style={{ backgroundImage: `url('/assets/images/paint.png')` }}></div>
            <div
                className="absolute inset-0 bg-[#FFFDF2] bg-opacity-80 flex flex-col lg:flex-row lg:space-y-0 space-y-7  lg:space-x-24 justify-center items-center text-[#646C64] text-[54px] lg:text-[100px] font-bold font-fredoka px-4">
                <div className="flex flex-col space-y-0 lg:space-y-7 justify-center items-center text-left">
                    <h1>Duby’s</h1>
                    {/*<h1 className="hidden lg:block flex-shrink-0">Sip, Paint, and Worship</h1>*/}
                    <h1 className="block flex-shrink-0">Sip, Paint,</h1>
                    <h1 className="block">and Worship</h1>
                </div>
                <div
                    className="h-[370px] w-[320px] lg:h-[550px] lg:w-[420px] flex justify-center items-center overflow-hidden relative border-[10px] border-[#646C64]/[.6] rounded-[16px] mt-20">
                    <Image src={Duby} alt="Duby" layout="fill" objectFit="cover" objectPosition="center"/>
                </div>
            </div>
        </div>
    );
}

export default HeroView;