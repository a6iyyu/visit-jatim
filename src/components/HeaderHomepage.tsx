import React from "react";

export const HeaderHomepage: React.FC = () => {
  return (
    <div className="h-36 w-full grid place-items-center bg-gray-100">
      <div className="h-full w-[90%] flex">
        <div className="h-full w-1/3 grid place-items-center">
          <img src="" alt="" className="" />
        </div>
        <div className="h-full w-2/3 flex">
          <div className="h-full w-3/5 flex items-center justify-around">
            <a
              href="/tentang-jatim"
              className="text-1xl text-gray-950 font-semibold hover:underline hover:text-gray-800"
              style={{ transition: "all 0.3s ease-in-out" }}
            >
              TENTANG JATIM
            </a>
            <a
              href="/budaya"
              className="text-1xl text-gray-950 font-semibold hover:underline hover:text-gray-800"
              style={{ transition: "all 0.3s ease-in-out" }}
            >
              BUDAYA
            </a>
            <a
              href="/destinasi"
              className="text-1xl text-gray-950 font-semibold hover:underline hover:text-gray-800"
              style={{ transition: "all 0.3s ease-in-out" }}
            >
              DESTINASI
            </a>
          </div>
          <div className="h-full w-1/5 grid place-items-center"></div>
          <div className="h-full w-1/5 grid place-items-center"></div>
        </div>
      </div>
    </div>
  );
};