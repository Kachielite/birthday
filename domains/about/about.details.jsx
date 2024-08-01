/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

const AboutDetails = () => {
    return (
        <div
            className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-5  w-full text-[#646C64]">
            <h2 className="text-[35px] lg:text-[42px] font-bold font-fredoka">About the 3rd August</h2>
            <p className="text-[18px] font-normal font-lato">
                Hey beautiful! It’s my birthday on the August 3rd and I’m so excited, can you tell?
            </p>
            <p className="text-[18px] font-normal font-lato">
                In the past, I've never really done anything special for my birthday, but this year, I want it to be
                different. I want to spend quality time with the ladies who mean the most to me — YOU, are top on my
                list!
            </p>
            <p className="text-[18px] font-normal font-lato">
                I want us to spend time worshipping, laughing, eating, singing, and dancing to our hearts' content. This is a special moment for me, and I can't wait to share it with you.

            </p>
            <h2 className="text-[35px]  lg:text-[42px] font-bold font-fredoka">On this special day</h2>
            <p className="text-[18px] font-normal font-lato">
                Your presence here means the world to me. You bring so much color to my life, and there's no one I'd
                rather celebrate this day with than you!
            </p>
            <p className="text-[18px] font-normal font-lato">
                Take a journey through the website to see all the fun we have planned. I've created a special place just
                for you, with everything curated specifically for each individual.

            </p>
            <p className="text-[18px] font-normal font-lato">
                Don’t forget to RSVP! Let's make this day unforgettable together!
            </p>
            <Link href="#rsvp"
                  className="flex-shrink-0 rounded-[10px] w-[100px] h-[50px] font-lato text-[14px] rsvp flex justify-center items-center text-white">
                RSVP now
            </Link>
        </div>
    );
}

export default AboutDetails;