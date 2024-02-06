import React, { useState, useRef, useEffect } from "react";
import AccordionMobile from "./AccordionMobile";


export const MobileNavbar: React.FC = () => {
  const [mobileNavbarOpen, setMobileNavbarOpen] = useState(false);
  const mobileNavbarRef = useRef(null)

  const handleMobileNavbar = () => setMobileNavbarOpen(!mobileNavbarOpen)
  const clickOutside = (event: MouseEvent) => {
    if (mobileNavbarRef.current && !mobileNavbarRef.current.contains(event.target)) {
      setMobileNavbarOpen(false);
    }
  }
  useEffect(() => {
    document.addEventListener('mousedown', clickOutside)

    return () => {
      document.removeEventListener('mousedown', clickOutside)
    }
  }, [])
  
  return (
    <div ref={mobileNavbarRef}>
      <button onClick={handleMobileNavbar} className="flex md:hidden p-2 border-[3px] border-gray-50 rounded-sm 
      bg-transparent hover:border-slate-900 hover:bg-gray-50 hover:text-slate-900"><i className="bi bi-list text-4xl"></i></button>

      {mobileNavbarOpen && (
        <div className={`absolute right-0 top-28 w-full h-fit bg-gray-50 shadow-md flex flex-col justify-evenly border 
        text-slate-950 transition-all ease-in-out duration-200`} data-aos={mobileNavbarOpen ? "fade-down" : "fade-up"} data-aos-duration-200>

          <a className="px-10 py-5 flex justify-between font-semibold bg-transparent hover:bg-slate-900 
        hover:text-gray-50 transition cursor-pointer"><h2 className="pl-5">TENTANG JATIM</h2><span></span></a>
          <AccordionMobile name={"DESTINASI"} options={[
            "Wilayah",
            "Taman Nasional",
            "Saran Perjalanan",
            "Kota & Desa"
          ]} />

          <AccordionMobile name={"INSPIRASI"} options={[
            "Petualangan",
            "Kuliner",
            "Budaya",
            "Acara"
          ]} />
        </div>
      )}
    </div>
  )
}