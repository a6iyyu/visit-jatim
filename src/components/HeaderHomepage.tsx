import React, { useState } from "react";
import Dropdown from "./molecules/Dropdown";
import "../../static/scss/component.scss";

export const Header: React.FC = () => {
  const [scrolling, setScrolling] = useState(false);

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
      className={
        scrolling
          ? "h-28 pl-28 pr-40 w-full flex justify-between items-center fixed z-50 transition-all shadow-lg text-slate-950 bg-slate-50"
          : "h-28 pl-28 pr-40 w-full flex justify-between items-center fixed z-50 text-gray-50 bg-transparent transition-all"
      }
    >
      <div className="h-full w-1/6 flex items-center justify-start">
        <img src="/static/img/logo.png" alt="" width={100} data-aos="fade-in" />
      </div>
      <div className="h-full w-3/5 flex items-center justify-around">
        <Dropdown
          name={"TENTANG JATIM"}
          options={["Pendidikan", "Sosial", "Keagamaan", "Kependudukan"]}
        />
        <Dropdown
          name={"DESTINASI"}
          options={[
            "Wilayah",
            "Taman Nasional",
            "Saran Perjalanan",
            "Kota & Desa",
          ]}
        />
        <Dropdown
          name={"INSPIRASI"}
          options={["Petualangan", "Kuliner", "Budaya", "Acara"]}
        />
        <div className="h-full flex items-center">
          <span>
            <i className="bi bi-globe2 text-xl mx-3 font-bold"></i>
          </span>
          id
        </div>
        <div className="h-full flex items-center justify-end">Darkmode</div>
      </div>
    </nav>
  );
};