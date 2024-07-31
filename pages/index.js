// pages/index.js
import AboutView from "@/domains/about/about.view";
import HeaderView from "@/domains/header/header.view";
import HeroView from "@/domains/hero/hero.view";
import Invitation from "@/domains/invitation/invitation";
import TimelineView from "@/domains/timeline/timeline.view";
import RsvpView from "@/domains/rsvp/rsvp.view";
import {useEffect, useState} from "react";
import LocationView from "@/domains/location/location.view";
import FooterView from "@/domains/footer/footer.view";

export default function Home() {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        if (typeof window === 'undefined') {
            return <div />;
        }
        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
    return (
        <main className="relative h-screen w-screen flex flex-col justify-start items-center font-lato">
            <section className="w-full">
                <div className="bg-[#FFFDF2] bg-opacity-90 w-full">
                    <HeaderView  offset={offset}/>
                    <HeroView />
                </div>
                <Invitation />
                <AboutView />
                <TimelineView/>
                <RsvpView/>
                <LocationView/>
                <FooterView/>
            </section>
        </main>
    );
}