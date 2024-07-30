/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

const AboutDetails = () => {
    return (
        <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-5 bg-white w-full text-[#646C64]">
            <h2 className="text-[35px] lg:text-[42px] font-bold font-fredoka">Oh, this sweet little human being</h2>
            <p className="text-[18px] font-normal font-lato">Liam was born in 2018 on November 19th, at 7:00 am. This cutie-pie early-bird loves chocolate muffins, coconut, dragons, playing with sand, and the red hat he's wearing all over the year, no matter the season.</p>
            <h2 className="text-[35px]  lg:text-[42px] font-bold font-fredoka">On this special day</h2>
            <p className="text-[18px] font-normal font-lato">We would be very excited to see you on Liam's 4th birthday, and we like to cherish and celebrate our little king's birthday with you. Just have a glimpse of Liam's birthday website so that you can guess the fun we would have on his birthday!</p>
            <Link href="rsvp" className="rounded-[10px] w-[100px] h-[50px] font-lato text-[14px] rsvp flex justify-center items-center text-white">
                RSVP now
            </Link>
        </div>
    );
}

export default AboutDetails;