import React from "react";

export const HeaderHomepage: React.FC = () => {
  return (
    <div className=" pl-28 pr-40 h-32 w-full grid place-items-center bg-gray-100">
      <div className="h-full w-full flex justify-between">
        <div className="h-full w-1/4 grid place-items-center">
          {/* <img src="" alt="" className="" /> */}
          <h1 className="text-2xl text-gray-950 font-bold">Visit Jatim</h1>
        </div>
        <div className="h-full w-3/4 flex">
          <div className="h-full w-full flex items-center justify-end">
            <a
              href="/tentang-jatim"
              className="mx-5 text-base text-gray-950 font-semibold hover:underline hover:text-gray-800"
              style={{ transition: "all 0.3s ease-in-out" }}
              data-aos="fade-in"
            >
              TENTANG JATIM
            </a>
            <a
              href="/budaya"
              className="mx-5 text-base text-gray-950 font-semibold hover:underline hover:text-gray-800"
              style={{ transition: "all 0.3s ease-in-out" }}
              data-aos="fade-in"
            >
              BUDAYA
            </a>
            <a
              href="/destinasi"
              className="mx-5 text-base text-gray-950 font-semibold hover:underline hover:text-gray-800"
              style={{ transition: "all 0.3s ease-in-out" }}
              data-aos="fade-in"
            >
              DESTINASI
            </a>
            <div className="h-full mx-2 min-w-[20px] place-items-center text-gray-950 flex justify-center">
              <span>
                <i className="bi bi-globe2 text-xl font- text-slate-900 mx-2"></i>
              </span>en
            </div>
            <div className="h-full mx-5 place-items-center text-gray-950 flex justify-center">darkmode</div>
          </div>
        </div>
      </div>
    </div>
  );
};