// domains/rsvp/rsvp.info.jsx
import Link from "next/link";

const RsvpInfo = ({ setShowForm }) => {
    return (
        <div className="h-fit lg:h-[384px] w-full lg:w-[600px] flex flex-col justify-center items-center space-y-4 bg-[#FFFDF2] p-[40px] text-[#646C64]">
            <p className="text-[19px] font-lato">Are you coming?</p>
            <h3 className="text-[35px] font-fredoka font-bold">RSVP here</h3>
            <p className="text-[19px] font-lato text-center">We are getting well-prepared to welcome you. See you soon!</p>
            <p className="text-[19px] font-lato text-center">03.08.2024 | 4:00PM (GMT+01)</p>
            <Link href="#rsvp-form" onClick={setShowForm} className="rounded-[10px] w-[100px] h-[50px] font-lato text-[14px] rsvp flex justify-center items-center text-white">
                RSVP
            </Link>
        </div>
    );
}

export default RsvpInfo;