import {useState} from "react";
import HeaderBrand from "@/domains/header/header.brand";
import HeaderNav from "@/domains/header/header.nav";
import HeaderToggle from "@/domains/header/header.toggle";
import HeaderMobileNav from "@/domains/header/header.mobile-nav";

const NAV_ITEMS = [
    {label: 'About Dubem', path: '#about'},
    {label: 'Timeline', path: '#timeline'},
    {label: 'RSVP', path: '#rsvp'},
    {label: 'Venue', path: '#venue'},
]

const HeaderView = () => {

    const [isOpen, setIsOpen] = useState(false)
    const menuHandler = () => setIsOpen(prevState => !prevState)

    return (
        <>
            <div
                className="fixed z-10 flex flex-row items-center justify-between w-full bg-[#DCAE96] px-4 lg:px-20 py-4">
                <HeaderBrand/>
                <HeaderToggle menuHandler={menuHandler} isOpen={isOpen}/>
                <HeaderNav items={NAV_ITEMS}/>
            </div>
            <HeaderMobileNav items={NAV_ITEMS} isOpen={isOpen}/>
        </>
    );
}

export default HeaderView;