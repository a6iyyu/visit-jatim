import { useEffect, useRef, useState } from "react";

export const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);
  const hamburger = useRef(null);
  const menus = ["Inspirasi", "Penduduk", "Wisata"];

  useEffect(() => {
    const HandleOutside = (e) => (hamburger.current && !hamburger.current.contains(e.target)) ?? setOpen(false);
    document.addEventListener("click", HandleOutside);
    return () => document.removeEventListener("click", HandleOutside);
  }, []);

  return (
    <i className="fa-solid fa-bars flex cursor-pointer text-3xl text-gray-50 lg:hidden" onClick={() => setOpen(!open)}>
      {open &&
        <main ref={hamburger} className="absolute right-[10%] top-20 flex flex-col rounded-2xl bg-slate-50 p-0 text-base font-semibold text-gray-950 lg:hidden lg:text-lg">
          {menus.map((menu, i) =>
            <a key={i} href={`/${menu.toLowerCase()}`} className="mx-auto h-fit w-full py-5 text-center transition-all duration-300 ease-in-out first:rounded-t-2xl last:rounded-b-2xl hover:bg-slate-200">
              {menu}
            </a>  
          )}
        </main>
      }
    </i>
  );
};