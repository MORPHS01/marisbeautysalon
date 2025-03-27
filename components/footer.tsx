import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bottom-0 bg-gradient-to-r from-[#3F2136] to-[#B6398E] text-[#E3E4DB] w-full py-[35px] px-[6%]">
      <section className="flex max-md:flex-col justify-between gap-y-[25px] mb-5">
        <div className="flex flex-col gap-[10px] items-center">
          <Link href="/" className="flex items-center gap-[7px]">
            <Image src="/logo/marislogo-bw.png" alt="logo" height={35} width={35} className="w-[35px] max-md:w-[27px]"/>
            <p className="font-poppins text-2xl max-sm:text-lg">maris beauty salon</p>
          </Link>
          <p className="font-alexBrush text-3xl max-sm:text-xl">looking good is paramount...</p>
        </div>
        
        <div className="flex max-sm:flex-col max-sm:gap-y-[4px] gap-x-[20px] justify-center flex-wrap items-center max-sm:text-sm">
          <Link href="/hair-services">Hair Services</Link>
          <Link href="/beauty-services">Beauty Services</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/booking" className="hidden max-md:block lg:block">Book an Appointment</Link>
        </div>
      </section>

      <div className="flex justify-center items-center">
        <p className="font-kaushanScript text-base max-sm:text-sm">Designed and Developed by <a target="_blank" href="https://ayonimofe-portfolio-website.vercel.app/" className="font-poppins text-[#00ffff]">Ayonimofe Atoyebi</a></p>
      </div>
    </footer>
  )
}

export default Footer