import React, { useState, useRef, useEffect, type RefObject } from "react";
import { AccordionMobile } from "./AccordionMobile";

export const MobileNavbar: React.FC = () => {
  const [mobileNavbarOpen, setMobileNavbarOpen] = useState<boolean>(false);
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

  return (
    <div ref={mobileNavbarRef}>
      <button
        onClick={handleMobileNavbar}
        className="flex rounded-sm border-[3px] border-gray-50 bg-transparent p-2 hover:border-slate-900 hover:bg-gray-50 hover:text-slate-900 md:hidden"
      >
        <i className="bi bi-list text-4xl"></i>
      </button>
      {mobileNavbarOpen && (
        <div
          className="absolute right-0 top-28 flex h-fit w-full flex-col justify-evenly border bg-gray-50 text-slate-950 shadow-md transition-all duration-200 ease-in-out"
          data-aos={mobileNavbarOpen ? "fade-down" : "fade-up"}
          data-aos-duration-200
        >
          <a className="flex cursor-pointer justify-between bg-transparent px-10 py-5 font-semibold transition hover:bg-slate-900 hover:text-gray-50">
            <h2 className="pl-5">TENTANG JATIM</h2>
            <span></span>
          </a>
          <AccordionMobile
            name={"DESTINASI"}
            options={[
              "Ragam Wisata",
              "Taman Nasional",
              "Saran Perjalanan",
              "Kota & Desa",
            ]}
          />
          <AccordionMobile
            name={"INSPIRASI"}
            options={["Petualangan", "Kuliner", "Budaya", "Acara"]}
          />
        </div>
      )}
    </div>
  );
};