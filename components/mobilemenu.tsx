"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


type navMenuType = {
  label: string;
  route: string;
};

const navMenu: navMenuType[] = [
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


function MobileMenu() {
  const [ showMenu, setShowMenu] = useState(false);

  return (
    <main className="hidden max-md:block">
      <div>
        <Image src="/svgs/menu.svg" alt="menu" width={30} height={10} className="cursor-pointer" onClick={() => setShowMenu(true)}/>
      </div>

      <aside className={`fixed top-0 left-0 z-[100000] h-screen w-screen flex flex-col justify-between px-[6%] py-[30px] bg-[#E3E4DB] transition-transform duration-400 ease-in-out ${showMenu ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex flex-col">
          <section className="flex justify-between items-center mb-12">
            <Link href="/" className="flex items-center justify-center gap-[7px]" onClick={() => setShowMenu(false)}>
              <Image src="/logo/marislogo.png" alt="logo" height={35} width={35} className="w-[35px] max-md:w-[27px]"/>
              <p className="font-poppins text-2xl max-lg:text-xl max-sm:text-lg">maris beauty salon</p>
            </Link>
            <Image src="/svgs/close-menu.svg" alt="close-menu" height={23} width={23} className="cursor-pointer" onClick={() => setShowMenu(false)}/>
          </section>
          <div className="flex flex-col items-center justify-center gap-[15px] mb-10">
            {navMenu.map((menu, i) =>
              <Link href={menu.route} key={i} className="capitalize cursor-pointer font-md text-[18px] max-lg:text-[16px] text-[#2A2B2A] hover:text-[#F900AD] hover:scale-115 transition-all duration-250 ease-in-out" onClick={() => setShowMenu(false)}>{menu.label}</Link>
            )}
          </div>
          <Link href="/booking" className="bg-[#F900AD] hover:bg-[#EE72C4] hover:scale-105 px-[20px] py-[10px] max-w-[300px] mx-auto rounded-[10px] text-center cursor-pointer transition-all duration-250 ease-in-out" onClick={() => setShowMenu(false)}>
            <p className="font-poppins text-[#E3E4DB] text-lg">Book an Appointment</p>
          </Link>
        </div>

        <div className="flex justify-center items-center">
          <p className="font-kaushanScript text-base max-sm:text-sm">Designed and Developed by <a target="_blank" href="https://ayonimofe-portfolio-website.vercel.app/" className="font-poppins text-[#F900AD]">Ayonimofe Atoyebi</a></p>
      </div>
      </aside>
    </main>
  )
}

export default MobileMenu