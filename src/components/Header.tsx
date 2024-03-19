import React, { useEffect, useRef, useState, type RefObject } from "react";
import { AccordionMobile } from "./AccordionMobile";
import { Dropdown } from "./Dropdown";
import logo from "../../public/logo-black.png";

export const Header: React.FC = () => {
  const [scrolling, setScrolling] = useState(false);
  const [mobileNavbarOpen, setMobileNavbarOpen] = useState(false);
  const mobileNavbarRef: RefObject<HTMLDivElement> = useRef(null);
  const logoImg = logo.src;

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
      className={`fixed z-50 flex h-28 w-full items-center justify-center ${
        scrolling || mobileNavbarOpen
          ? "bg-slate-50 text-slate-900 shadow-lg transition-all duration-200 ease-in-out"
          : "navbar bg-transparent transition-all duration-200 ease-in-out"
      }`}
    >
      <div className="flex h-full w-[85%] items-center justify-between">
        <a href="/" className="logo flex h-full w-2/3 items-center md:w-2/5">
          <img src={logoImg} width={125} alt="Logo" />
        </a>
        <div className="hidden h-full w-3/4 items-center justify-evenly md:flex lg:w-3/5">
          <a
            href="/tentang-jatim"
            className="text-base font-semibold transition-all hover:underline"
            data-aos="fade-in"
          >
            TENTANG JATIM
          </a>
          <Dropdown
            name={"DESTINASI"}
            options={["Ragam Wisata", "Kota & Desa", "Taman Nasional"]}
          />
          <Dropdown
            name={"INSPIRASI"}
            options={["Budaya", "Kuliner", "Pendidikan"]}
          />
        </div>
      </div>
      {/* <MobileNavbar/> */}
      <div ref={mobileNavbarRef} className="mr-5">
        <button
          onClick={handleMobileNavbar}
          className="flex rounded-sm border-[3px] border-gray-50 bg-transparent p-2 hover:border-slate-900 hover:bg-gray-50 hover:text-slate-900 md:hidden"
        >
          <i className="bi bi-list text-4xl"></i>
        </button>
        {mobileNavbarOpen && (
          <div
            className={`absolute right-0 top-28 flex h-fit w-full flex-col justify-evenly border bg-gray-50 text-slate-950 shadow-md transition-all duration-200 ease-in-out`}
            data-aos={mobileNavbarOpen ? "fade-down" : "fade-up"}
            data-aos-duration-200
          >
            <a
              href="/tentang-jatim"
              className="flex cursor-pointer justify-between bg-transparent px-10 py-5 font-semibold transition hover:bg-slate-900 hover:text-gray-50"
            >
              <h2 className="pl-5">TENTANG JATIM</h2>
              <span></span>
            </a>
            <AccordionMobile
              name={"DESTINASI"}
              options={["Ragam Wisata", "Kota & Desa", "Taman Nasional"]}
            />
            <AccordionMobile
              name={"INSPIRASI"}
              options={["Budaya", "Kuliner", "Pendidikan"]}
            />
          </div>
        )}
      </div>
    </nav>
  );
};