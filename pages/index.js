// pages/index.js
import AboutView from "@/domains/about/about.view";
import HeaderView from "@/domains/header/header.view";
import HeroView from "@/domains/hero/hero.view";
import Invitation from "@/domains/invitation/invitation";
import TimelineView from "@/domains/timeline/timeline.view";

export default function Home() {
    return (
        <main className="relative h-screen w-screen flex flex-col justify-start items-center font-lato">
            <section className="w-full">
                <div className="bg-[#FFFDF2] bg-opacity-90 w-full">
                    <HeaderView />
                    <HeroView />
                </div>
                <Invitation />
                <AboutView />
                <TimelineView/>
            </section>
        </main>
    );
}