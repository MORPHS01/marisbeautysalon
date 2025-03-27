"use client"
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./mobilemenu";
import { useState, useEffect } from "react";


type navMenuType = {
  label: string;
  route: string;
}[];

const navMenu: navMenuType = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "Hair Services",
    route: "/hair-services",
  },
  {
    label: "Beauty Services",
    route: "/beauty-services",
  },  
  {
    label: "Contact & Location",
    route: "/contact",
  },
]

function Header() {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 75);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <header className={`px-[6%] py-[30px] flex justify-between z-[1000] bg-[#E3E4DB]/85 transition-all duration-200 ease-in-out ${isScrolled && "md:sticky md:top-0 md:shadow-lg md:backdrop-blur-[85px]"}`}>
      <Link href="/" className="flex items-center justify-center gap-[7px]">
        <Image src="/logo/marislogo.png" alt="logo" height={35} width={35} className="w-[35px] max-md:w-[27px]"/>
        <p className="font-poppins text-2xl max-lg:text-xl max-sm:text-lg">maris beauty salon</p>
      </Link>

      <div className="flex gap-[60px] items-center justify-center max-md:hidden">
        <div className="flex items-center justify-center gap-[25px]">
          {navMenu.map((menu, i) => 
            <Link href={menu.route} key={i} className={`cursor-pointer font-md text-[18px] max-lg:text-[15px] text-[#2A2B2A] hover:text-[#F900AD] hover:scale-115 transition-all duration-250 ease-in-out ${ i === 0 && "max-lg:hidden" }`}>{menu.label}</Link>
          )}
        </div>

        <Link href="/booking" className="bg-[#F900AD] hover:bg-[#EE72C4] hover:scale-105 px-[20px] py-[10px] rounded-[10px] cursor-pointer transition-all duration-250 ease-in-out max-xl:hidden">
          <p className="font-poppins text-[#E3E4DB] text-lg">Book an Appointment</p>
        </Link>
      </div>

      {/* Mobile menu */}
      <MobileMenu/>
    </header>
  )
}

export default Header