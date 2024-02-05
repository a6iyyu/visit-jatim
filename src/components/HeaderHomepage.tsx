import "../../static/scss/component.scss";
import React, { useEffect, useState } from "react";
import Dropdown from "./molecules/Dropdown";

export const HeaderHomepage: React.FC = () => {

  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false)
    }
  }
  window.addEventListener('scroll', handleScroll)

  return (
    <nav className={scrolling ? "h-28 pl-28 pr-40 w-full flex justify-between items-center fixed z-50 text-slate-900 bg-slate-50 transition-all shadow-lg"
      : "h-28 pl-28 pr-40 w-full flex justify-between items-center fixed z-50 text-gray-50 bg-transparent transition-all"}>

      <div className="h-full w-1/6 flex items-center">
        <h1 className="text-3xl font-semibold text-start">Visit Jatim</h1>
      </div>

      <div className="h-full w-3/5 flex items-center justify-around">
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
    </nav>
  );
};