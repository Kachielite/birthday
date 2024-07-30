import Link from "next/link";

const HeaderNav = ({items}) => {

    return(
        <nav className="hidden lg:flex flex-row justify-end items-center space-x-10 font-semibold">
            {items.map((item, index) => <Link className="text-[16px]" key={index} href={item.path}>{item.label}</Link>)}
        </nav>
    )
}

export default HeaderNav;