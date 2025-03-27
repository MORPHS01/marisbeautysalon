"use client"
import { useState } from "react";
import Image from "next/image";
import { useForm } from '@formspree/react';
import { useSearchParams } from "next/navigation";


function Booking() {
  const searchParams = useSearchParams();
  const importedService = searchParams.get('Service');

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [service, setService] = useState(importedService || "");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [modal, setModal] = useState(false);

  // formspree Implementation
  const [ , handleSubmit] = useForm("xqaplvrn");

  const datePicker = document?.getElementById("date-picker") as HTMLInputElement;
  const timePicker = document?.getElementById("time-picker") as HTMLInputElement;
  
  const monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

  const convertDate = (e: React.FormEvent<HTMLInputElement>) => {
    const [ , month, day] = (e.target as HTMLInputElement).value.split("-");
    const monthIndex = parseInt(month, 10) - 1; 
    const monthName = monthNames[monthIndex];
    setSelectedDate(`${day} ${monthName}`); 
  }

  const convertTime = (e: React.FormEvent<HTMLInputElement>) => {
    const [hours, minutes] = (e.target as HTMLInputElement).value.split(":").map(Number);
    const period = hours >= 12 ? "PM" : "AM";
    const hour = hours % 12 || 12; 
    const time = `${hour}:${minutes.toString().padStart(2, "0")} ${period}`;
    setSelectedTime(time);
  }

  const resetAll = () => {
    setName("");
    setNumber("");
    setService("");
    setSelectedDate("");
    setSelectedTime("");
    datePicker.value = "";
    timePicker.value = "";
    setModal(false);
  }


  return (
    <main>
      <h2 className="-mx-[6.80%] font-poppins tracking-[0.125em] text-center py-7 bg-gradient-to-tr from-[#3F2136] to-[#AC117D] text-[#E3E4DB] font-[600] text-4xl max-md:text-3xl max-sm:text-2xl">Booking</h2>
      <p className="text-xs text-center mt-10 text-[#A2A2A2]">*All Fields Are Required</p>


      <form onSubmit={handleSubmit} className="mt-10 mb-5 max-w-[500px] w-full mx-auto flex flex-col gap-7">
        <div className="relative border border-[#2A2B2A]/40 rounded-xl">
          <p className="absolute -top-2 left-3 px-1 font-poppins text-xs font-bold bg-[#E3E4DB]">Name</p>
          <input required type="text" placeholder="Name" name="Name" value={name} onChange={(e) => setName(e.target.value)} className="outline-[#AC117D] font-poppins w-full h-full px-7 py-4 rounded-xl placeholder:max-sm:text-sm"/>
        </div>

        <div className="relative border border-[#2A2B2A]/40 rounded-xl">
          <p className="absolute -top-2 left-3 px-1 font-poppins text-xs font-bold bg-[#E3E4DB]">Phone Number</p>
          <input required type="number" placeholder="Phone Number(WhatsApp preferred)" name="Phone Number" value={number} onChange={(e) => setNumber(e.target.value)} className="outline-[#AC117D] font-poppins w-full h-full px-7 py-4 rounded-xl placeholder:max-sm:text-sm appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"/>
        </div>

        <div className="relative border border-[#2A2B2A]/40 rounded-xl">
          <p className="absolute -top-2 left-3 px-1 font-poppins text-xs font-bold bg-[#E3E4DB]">Service Required</p>
          <input required type="text" placeholder="Please Enter Required Service" name="Service Required" value={service} onChange={(e) => setService(e.target.value)} className="outline-[#AC117D] font-poppins w-full h-full px-7 py-4 rounded-xl placeholder:max-sm:text-sm"/>
        </div>

        <aside className="flex justify-between">
          <div className="relative border border-[#2A2B2A]/40 rounded-xl w-[47%]" onClick={() => datePicker?.showPicker()}>
            <p className="absolute -top-2 left-3 px-1 font-poppins text-xs font-bold bg-[#E3E4DB]">Suitable Date</p>
            <input required type="date" id="date-picker" placeholder="Please Enter Suitable Date" onChange={convertDate} className="outline-[#AC117D] cursor-pointer font-poppins w-full h-full px-7 py-4 rounded-xl placeholder:max-sm:text-sm"/>
          </div>

          {/* This is here in order to reformat the data passed across */}
          <input type="text" name="Suitable Date" value={selectedDate} readOnly className="hidden"/>
          <input type="text" name="Suitable Time" value={selectedTime} readOnly className="hidden"/>

          <div className="relative border border-[#2A2B2A]/40 rounded-xl w-[47%]" onClick={() => timePicker?.showPicker()}>
            <p className="absolute -top-2 left-3 px-1 font-poppins text-xs font-bold bg-[#E3E4DB]">Suitable Time</p>
            <input required type="time" id="time-picker" placeholder="Please Enter Suitable Time" onChange={convertTime} className="outline-[#AC117D] cursor-pointer font-poppins w-full h-full px-7 py-4 rounded-xl placeholder:max-sm:text-sm"/>
          </div>
        </aside>

        <button type="submit" onClick={() => setTimeout(() => setModal(true), 700)} disabled={!name || !number || !service || !selectedDate || !selectedTime} className="w-full cursor-pointer bg-[#F900AD] hover:bg-[#EE72C4] hover:scale-105 transition-all duration-250 ease-in-out text-[#E3E4DB] font-poppins font-bold tracking-[0.125em] rounded-xl text-center py-4 disabled:bg-[#F900AD]/30 disabled:cursor-not-allowed disabled:hover:scale-100">Book Now</button>
      </form>


      <section className={`fixed left-0 top-0 w-full h-full transition-all duration-500 ease-in-out ${modal ? "translate-y-0" : "translate-y-full"}`}>
        <div className="fixed left-0 top-0 cursor-pointer bg-black/30 backdrop-blur-sm w-full h-full" onClick={resetAll}/>

        <article className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#E3E4D8] p-8 max-sm:p-6 rounded-[8px] flex flex-col items-center gap-8 max-sm:gap-6 w-full max-w-[min(calc(100vw_-_40px),_420px)] z-30 transition-all duration-300 opacity-100 visible">
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center justify-center gap-[7px]">
              <Image src="/logo/marislogo.png" alt="logo" height={35} width={35} className="w-[30px] max-md:w-[25px]"/>
              <p className="font-poppins text-lg max-sm:text-base">maris beauty salon</p>
            </div>

            <Image src="/svgs/close-menu.svg" alt="close-menu" height={20} width={20} className="cursor-pointer" onClick={resetAll}/>
          </div>

          <p className="font-poppins text-[#2A2B2A]/80 text-center text-base">Thank you for booking our service <b className="text-[#2A2B2A]/95">{name}</b>! We truly appreciate your trust. Our team will review your request and contact you shortly to confirm the details and ensure a smooth experience.</p>
        </article>
      </section>
    </main>
  )
}

export default Booking