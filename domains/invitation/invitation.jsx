/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

const Invitation = () => {
    return (
        <div className="w-full h-[402px] bg-[#646C64]/[0.9] text-white font-fredoka flex flex-col space-y-10 justify-center items-center px-4">
            <p className="text-[#A7B3A3] text-[20px]">August 3rd</p>
            <p className="text-[35px] lg:text-[54px] text-center">You are invited to Duby's birthday party</p>
            <Link href="#rsvp" className="font-lato text-[16px]">
                <div className="flex flex-row space-x-2 items-center justify-center">
                    <p className="font-lato text-[16px]">RSVP now</p>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="white"
                        className="w-4 h-4"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </div>
            </Link>
        </div>
    );
}

export default Invitation;