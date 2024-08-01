import Link from "next/link";
import PinterestEmbed from "@/domains/dress-code/dress-code.pinterest";

const DressCodeView = () => {
    return (
        <div
            id="dress-code"
            className="w-full h-fit bg-[#FFFDF2] font-fredoka flex flex-col space-y-10 justify-center items-center px-4 text-[#646C64] py-10">
            <p className="text-[35px] lg:text-[42px] font-bold font-fredoka">What to wear?</p>
            <p className="text-[25px] font-normal font-lato text-center">Come looking chic and comfortable! Check out some ideas <span><Link href="https://pin.it/2ZKCkxlFN" className="underline">here</Link></span></p>
            <div className="w-[90vw] h-fit flex justify-center items-center">
                <PinterestEmbed/>
            </div>
        </div>
    )
}

export default DressCodeView