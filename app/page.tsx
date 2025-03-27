import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="flex items-center justify-between max-md:flex-col max-md:gap-14 mt-5 mb-[70px] h-[80vh]">
        <div className="flex flex-col gap-[20px] w-[50%] xl:w-[40%] max-sm:text-center max-md:w-full">
          <p className="font-poppins font-[600] text-4xl max-md:text-3xl max-sm:text-xl text-[#2A2B2A]">Transform <span className="text-[#F900AD]">Your</span> Look with Expert <span className="text-[#F900AD]">Hair</span> Styling</p>
          <p className="text-base text-[#50514E]">Step into a world of style and confidence with our professional hair services. Whether you&apos;re looking for a fresh cut, vibrant color, or a flawless updo, we bring artistry and precision to every strand. Book your appointment today and let your hair shine!</p>
          <Link href="/booking" className="bg-[#F900AD] hover:bg-[#EE72C4] hover:scale-105 px-[20px] py-[10px] rounded-[10px] max-sm:m-auto max-w-fit cursor-pointer transition-all duration-250 ease-in-out">
            <p className="font-poppins text-[#E3E4DB] text-lg max-sm:text-base">Book an Appointment</p>
          </Link>
        </div>

        <div className="w-[50%] max-md:w-[75%] max-sm:w-[90%] max-md:block relative">
          <div className="absolute w-[80%] lg:w-[85%] h-full bg-[#BD619E] rounded-[10px] -z-[10] -top-5 -right-5"/>
          <Image src="/image/stitch-braids-hero.png" alt="hero-image" className="z-[10]" width={579} height={431}/>
        </div>
      </section>
      
      <aside className="flex items-center justify-between max-md:flex-col-reverse max-md:gap-14 mb-[110px]">
        <div className="w-[50%] max-md:w-[75%] max-sm:w-[90%] max-md:block">
          <Image src="/image/collage.png" alt="hero-image" className="border-[6px] border-black rounded-[8px]" width={580} height={420}/>
        </div>

        <div className="flex flex-col gap-[20px] w-[45%] xl:w-[40%] max-sm:text-center max-md:w-full">
          <p className="font-poppins font-[600] text-4xl max-md:text-3xl max-sm:text-xl text-[#2A2B2A]">Beyond <span className="text-[#F900AD]">Hair:</span> Beauty & Elegance in <span className="text-[#F900AD]">Every</span> Detail</p>
          <p className="text-base text-[#50514E]">We offer more than just stunning hairstyles—our expert services include; flawless manicures and pedicures, professional makeup artistry, elegant gele tying, custom wig making, and intricate bead crafting. Let us bring out your beauty from head to toe with precision and creativity.</p>
          <Link href="/beauty-services" className="bg-[#F900AD] hover:bg-[#EE72C4] hover:scale-105 px-[20px] py-[10px] rounded-[10px] max-sm:m-auto max-w-fit cursor-pointer transition-all duration-250 ease-in-out">
            <p className="font-poppins text-[#E3E4DB] text-lg max-sm:text-base">Check out our Beauty Services</p>
          </Link>
        </div>
      </aside>

      <section className="flex items-center justify-between max-md:flex-col max-md:gap-14 mt-5 mb-[70px]">
        <div className="flex flex-col gap-[20px] w-[47%] xl:w-[40%] max-sm:text-center max-md:w-full">
          <p className="font-poppins font-[600] text-4xl max-md:text-3xl max-sm:text-xl text-[#2A2B2A]">Timeless <span className="text-[#F900AD]">Beauty</span> & Expertise: 22 <span className="text-[#F900AD]">Years</span> of Mastery</p>
          <p className="text-base text-[#50514E]">With over 22 years of experience in the hairstyling and beauty industry, I, Maria Atoyebi, have honed my skills to perfection, delivering exceptional services with precision, creativity, and passion. Every client receives personalized care, ensuring elegance and confidence.</p>
        </div>

        <div className="w-[50%] max-md:w-[75%] max-sm:w-[90%] rounded-xl">
          <Image src="/image/maria-photoshoot.jpg" alt="maria" className="z-[10] rounded-xl" width={579} height={431}/>
        </div>
      </section>

      <article className="flex flex-col items-center text-center gap-[20px] mb-[110px]">
        <p className="font-poppins font-[600] text-4xl max-md:text-3xl max-sm:text-xl text-[#2A2B2A]">Get in <span className="text-[#F900AD]">Touch</span> & Find Us <span className="text-[#F900AD]">with</span> Ease</p>
        <p className="text-base text-[#50514E]">We&apos;re here to bring beauty closer to you! Visit us at our salon for a premium experience, or reach out for inquiries, appointments, and special requests. Our location is easy to find, and our team is always ready to assist you. Let&apos;s connect today!</p>
        <Link href="/contact" className="bg-[#F900AD] hover:bg-[#EE72C4] hover:scale-105 px-[20px] py-[10px] rounded-[10px] max-sm:m-auto max-w-fit cursor-pointer transition-all duration-250 ease-in-out">
          <p className="font-poppins text-[#E3E4DB] text-lg max-sm:text-base">Contact & Location</p>
        </Link>
      </article>

      <section className="flex flex-col items-center text-center py-8 px-5 rounded-xl gap-[20px] bg-[#2A2B2A]">
        <p className="font-poppins font-[600] text-4xl max-md:text-3xl max-sm:text-xl text-[#E3E4DB]">Book Your Beauty <span className="text-[#F900AD]">Experience</span> with Ease</p>
        <p className="text-base text-[#9A9B95]">Looking flawless has never been easier! Schedule your appointment with us online or in person and enjoy expert beauty services tailored to your needs. Whether it&apos;s a fresh hairstyle, a stunning makeover, or a relaxing manicure, we&apos;re ready to bring your vision to life. Book now and let&apos;s create magic together!</p>
        <Link href="/booking" className="bg-[#F900AD] hover:bg-[#EE72C4] hover:scale-105 px-[20px] py-[10px] max-sm:px-[15px] rounded-[10px] max-sm:m-auto max-w-fit cursor-pointer transition-all duration-250 ease-in-out">
          <p className="font-poppins text-[#E3E4DB] text-lg max-sm:text-base">Book an Appointment Today!</p>
        </Link>
      </section>
    </main>
  );
}
