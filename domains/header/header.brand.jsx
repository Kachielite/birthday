import Link from "next/link";
import Image from "next/image";
import Icon from "@/public/assets/icons/brand.png";

const HeaderBrand = () =>{
    return (
        <Link href="/" className="flex flex-row justify-start items-center">
            <Image src={Icon} alt="logo" height={80} width={80} className="h-[40px] w-[40px] lg:h-[80px] lg:w-[80px] object-center object-contain" />
            <p className="text-xl lg:text-2xl font-extrabold pl-4">Duby</p>
        </Link>
    )
}

export default HeaderBrand;