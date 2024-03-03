import React, { useEffect, useRef, useState, type RefObject } from "react";
import { AccordionMobile } from "./AccordionMobile";
import { Dropdown } from "./Dropdown";

export const Header: React.FC = () => {
  const [scrolling, setScrolling] = useState(false);
  const [mobileNavbarOpen, setMobileNavbarOpen] = useState(false);
  const mobileNavbarRef: RefObject<HTMLDivElement> = useRef(null);

  const handleMobileNavbar = () => setMobileNavbarOpen(!mobileNavbarOpen);
  const clickOutside = (event: MouseEvent) => {
    if (mobileNavbarRef.current && !mobileNavbarRef.current.contains(event.target as Node)) {
      setMobileNavbarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", clickOutside);
    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };
  window.addEventListener("scroll", handleScroll);

  return (
    <nav
      className={`h-28 w-full flex items-center justify-center fixed z-50 ${
        scrolling || mobileNavbarOpen
          ? "text-slate-900 bg-slate-50 shadow-lg transition-all ease-in-out duration-200"
          : "navbar bg-transparent transition-all ease-in-out duration-200"
      }`}
    >
      <div className="h-full w-[85%] flex items-center justify-between">
        <a href="/" className="logo flex h-full w-2/3 md:w-2/5 items-center">
          <img src="../../static/img/logo-black.png?url" width={125} alt="Logo" />
        </a>
        <div className="hidden md:flex h-full w-3/4 lg:w-3/5 items-center justify-evenly">
          <a
            href="/tentang-jatim"
            className="text-base font-semibold transition-all hover:underline"
            data-aos="fade-in"
          >
            TENTANG JATIM
          </a>
          <Dropdown
            name={"DESTINASI"}
            options={[
              "Ragam Wisata", 
              "Kota & Desa", 
              "Taman Nasional"
            ]}
          />
          <Dropdown
            name={"INSPIRASI"}
            options={[
              "Budaya", 
              "Kuliner",
              "Pendidikan"
              ]}
          />
        </div>
      </div>
      {/* <MobileNavbar/> */}
      <div ref={mobileNavbarRef} className="mr-5">
        <button
          onClick={handleMobileNavbar}
          className="flex md:hidden p-2 border-[3px] border-gray-50 rounded-sm bg-transparent hover:border-slate-900 hover:bg-gray-50 hover:text-slate-900"
        >
          <i className="bi bi-list text-4xl"></i>
        </button>
        {mobileNavbarOpen && (
          <div
            className={`absolute right-0 top-28 w-full h-fit bg-gray-50 shadow-md flex flex-col justify-evenly border text-slate-950 transition-all ease-in-out duration-200`}
            data-aos={mobileNavbarOpen ? "fade-down" : "fade-up"}
            data-aos-duration-200
          >
            <a
              href="/tentang-jatim"
              className="px-10 py-5 flex justify-between font-semibold bg-transparent hover:bg-slate-900 hover:text-gray-50 transition cursor-pointer"
            >
              <h2 className="pl-5">TENTANG JATIM</h2>
              <span></span>
            </a>
            <AccordionMobile
              name={"DESTINASI"}
              options={[
                "Ragam Wisata", 
                "Kota & Desa", 
                "Taman Nasional"
              ]}
            />
            <AccordionMobile
              name={"INSPIRASI"}
              options={[
                "Budaya", 
                "Kuliner", 
                "Pendidikan"
              ]}
            />
          </div>
        )}
      </div>
    </nav>
  );
};