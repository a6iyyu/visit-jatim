import "../../static/scss/component.scss";
import React, { useEffect, useRef, useState } from "react";
import AccordionMobile from "./molecules/AccordionMobile";
import { MobileNavbar } from "./molecules/MobileNavbar";
import { Dropdown } from "./molecules/Dropdown";

export const Header: React.FC = () => {
  const [scrolling, setScrolling] = useState(false);

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

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };
  window.addEventListener("scroll", handleScroll);

  return (
    <nav className={`h-28 pl-4 sm:pl-10 md:pl-8 lg:pl-16 xl:pl-28 pr-4 sm:pr-10 md:pr-8 lg:pr-16 xl:pr-40 w-full 
    flex justify-between items-center fixed z-50 ${scrolling || mobileNavbarOpen ?
        "text-slate-900 bg-slate-50 shadow-lg transition-all ease-in-out duration-200" :
        "text-gray-50 bg-transparent transition-all ease-in-out duration-200"}`}>

      <div className="flex h-full w-2/3 md:w-1/5 items-center">
        <h1 className="text-3xl font-semibold text-start">Visit Jatim</h1>
      </div>

      <div className="hidden md:flex h-full w-3/4 lg:w-3/5 items-center justify-around">
        <button
          className="text-base font-semibold transition-all hover:underline hover:text-gray-800"
          data-aos="fade-in"
        >
          TENTANG JATIM
        </button>

        <Dropdown name={"DESTINASI"} options={[
          "Wilayah",
          "Taman Nasional",
          "Saran Perjalanan",
          "Kota & Desa"
        ]} />

        <Dropdown name={"INSPIRASI"} options={[
          "Petualanagan",
          "Kuliner",
          "Budaya",
          "Acara"
        ]} />
        <div className="h-full flex items-center"><span><i className="bi bi-globe2 text-xl mx-3 font-bold"></i></span>en</div>
        <div className="h-full flex items-center">darkmode</div>
      </div>
      {/* <MobileNavbar/> */}
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
    </nav>
  );
};