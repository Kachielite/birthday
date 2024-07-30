// domains/hero/hero.view.jsx
const HeroView = () => {
    return (
        <div className="w-screen h-[640px] lg:h-[840px] flex flex-row relative">
            <div className="w-1/2 h-full bg-cover bg-center" style={{ backgroundImage: `url('/assets/images/worship.png')` }}></div>
            <div className="w-1/2 h-full bg-cover bg-center" style={{ backgroundImage: `url('/assets/images/paint.png')` }}></div>
            <div
                className="absolute inset-0 bg-[#FFFDF2] bg-opacity-80 flex flex-col space-y-7 justify-center items-center text-[#646C64] text-[54px] lg:text-[84px] font-bold font-fredoka">
                <h1>Duby’s</h1>
                <h1 className="hidden lg:block">Sip, Paint, and Worship</h1>
                <h1 className="lg:hidden block">Sip, Paint, and</h1>
                <h1 className="lg:hidden block">Worship</h1>
            </div>
        </div>
    );
}

export default HeroView;