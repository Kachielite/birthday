import Link from "next/link";

const HeaderMobileNav = ({isOpen, items}) => {
    return(
        <div className={`right-0 ${isOpen ? "translate-y-14 z-40 bg-[#FFFDF2] h-screen" : "-translate-y-96 -z-40 "} ease-in-out duration-500 absolute block lg:hidden w-screen pt-10`}>
            <div className={`flex flex-col justify-start items-start w-full px-[1rem] pt-[1.4rem]  pb-[0.75rem] text-[#667085] text-[1rem] font-medium  space-y-[2.5rem]`}>
                {items.map((item, index) => <Link className="text-[16px]" key={index} href={item.path}>{item.label}</Link>)}
            </div>
        </div>
    )
}

export default HeaderMobileNav;