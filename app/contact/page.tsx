"use client"
import Image from "next/image";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L, { LatLngExpression } from "leaflet";
import Link from "next/link";
import dynamic from 'next/dynamic'
 
const MapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker), { ssr: false });
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), { ssr: false });

function Contact() {

  const position: LatLngExpression = [6.619307804140776, 3.5595638092519715];  

  const customIcon = new L.Icon({
    iconUrl: "/logo/marislogo.png", 
    iconSize: [30, 29], 
    iconAnchor: [12, 30], 
    popupAnchor: [1, -34], 
    shadowUrl: "/svgs/marker-shadow.png", 
    shadowSize: [41, 41],
  });

  return (
    <main>
      <h2 className="-mx-[6.80%] font-poppins tracking-[0.125em] text-center py-7 bg-gradient-to-tr from-[#3F2136] to-[#AC117D] text-[#E3E4DB] font-[600] text-4xl max-md:text-3xl max-sm:text-2xl">Contact & Location</h2>
    
      <section className="my-15 min-h-64 flex justify-between max-sm:flex-col max-sm:gap-10">
        <aside className="flex flex-col gap-7 w-[45%] max-md:w-[47%] max-sm:w-full">
          <div className="relative border border-[#2A2B2A]/40 rounded-xl px-7 py-4 ">
            <div className="absolute -top-2.5 left-3 px-1 flex gap-1 bg-[#E3E4DB] rounded-full">
              <Image src="/svgs/address.svg" alt="address" className="w-[17px] max-sm:w-[13px]" width={17} height={17} />
              <p className=" font-poppins text-sm max-sm:text-xs font-bold">Address</p>
            </div>
            <p className="font-poppins tracking-widest max-sm:text-sm">26, Ijede Road, Eleshin Bus-Stop, Ijede, Ikorodu, Lagos, Nigeria.</p>
          </div>

          <div className="relative border border-[#2A2B2A]/40 rounded-xl px-7 py-4 ">
            <div className="absolute -top-2.5 left-3 px-1 flex gap-1 bg-[#E3E4DB] rounded-full">
              <Image src="/svgs/call.svg" alt="call" className="w-[17px] max-sm:w-[13px]" width={17} height={17} />
              <p className=" font-poppins text-sm max-sm:text-xs font-bold">Call</p>
            </div>
            <p className="font-poppins tracking-widest max-sm:text-sm">08087263352</p>
          </div>

          <Link target="_blank" href="https://wa.me/+2348087263352?text=Hi%2C%20I%20would%20like%20to%20make%20enquiries%20about%20your%20hair%20styling%20services" className="relative group border border-[#2A2B2A]/40 rounded-xl px-7 py-4 hover:bg-[#2A2B2A] transition-all duration-200 ease-in-out">
            <div className="absolute -top-2.5 left-3 px-1 flex gap-1 bg-[#E3E4DB] rounded-full group-hover:hidden transition-all duration-200 ease-in-out">
              <Image src="/svgs/whatsapp.svg" alt="whatsapp" className="w-[17px] max-sm:w-[13px]" width={17} height={17} />
              <p className="font-poppins text-sm max-sm:text-xs font-bold group-hover:bg-[#E3E4DB]">Whatsapp</p>
            </div>
            <p className="font-poppins tracking-widest max-sm:text-sm group-hover:text-[#E3E4DB] group-hover:tracking-[0.3rem] transition-all duration-200 ease-in-out">08087263352</p>
          </Link>

          <Link target="_blank" href="https://www.facebook.com/share/1926VwVDQk/" className="relative group border border-[#2A2B2A]/40 rounded-xl px-7 py-4 hover:bg-[#2A2B2A] transition-all duration-200 ease-in-out">
            <div className="absolute -top-2.5 left-3 px-1 flex gap-1 bg-[#E3E4DB] rounded-full group-hover:hidden transition-all duration-200 ease-in-out">
              <Image src="/svgs/facebook.svg" alt="facebook" className="w-[17px] max-sm:w-[13px]" width={17} height={17} />
              <p className="font-poppins text-sm max-sm:text-xs font-bold group-hover:bg-[#E3E4DB]">Facebook</p>
            </div>
            <p className="font-poppins tracking-widest max-sm:text-sm group-hover:text-[#E3E4DB] group-hover:tracking-[0.3rem] transition-all duration-200 ease-in-out">Maria Atoyebi</p>
          </Link>
        </aside>

        <aside className="w-[45%] max-md:w-[47%] max-sm:w-full max-sm:aspect-[1.618] rounded-lg border-[2px] border-[#2A2B2A]/70 z-[10]">
          <MapContainer center={position} zoom={15} className="h-full w-full rounded-lg">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={customIcon}>
              <Popup>We are here!</Popup>
            </Marker>
          </MapContainer>
        </aside>
      </section>

      <Image src="/image/salon.jpeg" alt="salon-image" className="border-[5px] border-[#2A2B2A] rounded-2xl max-w-[800px] w-full mx-auto" width={1040} height={662}/>
    </main>
  )
}

export default Contact