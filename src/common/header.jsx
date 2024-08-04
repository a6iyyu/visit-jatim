import { useState } from "react";
import styled from "styled-components";
import { HamburgerMenu } from "./hamburger-menu";

const NavMenus = styled.nav`
  section:last-child a:not(a:nth-child(3)) {
    margin-right: 5em;
  }
`;

export const Header = () => {
  const [headerSticky, setHeaderSticky] = useState(false);
  const menus = ["Inspirasi", "Penduduk", "Wisata"];

  window.addEventListener("scroll", () => setHeaderSticky(window.scrollY > 5));

  return (
    <header className={`fixed top-0 z-50 grid h-24 w-full place-items-center transition-all duration-300 ease-in-out lg:h-36 ${headerSticky ? "bg-gradient-to-tr from-gray-900 to-gray-800 shadow-lg" : "bg-none"}`}>
      <NavMenus className="flex h-full w-4/5">
        <section className="flex h-full w-2/5 items-center">
          <a href="/" className="h-fit w-fit">
            <img src="/logo-white.png" alt="Logo" className="w-16 font-semibold text-gray-50 lg:w-[6.25rem]" loading="lazy" />
          </a>
        </section>
        <section className="flex h-full w-3/5 items-center justify-end">
          {menus.map((menu, i) =>
            <a key={i} className="hidden font-black text-white transition-all duration-300 ease-in-out [letter-spacing:0.1rem] hover:text-gray-200 hover:underline lg:flex">
              {menu}
            </a>
          )}
          <HamburgerMenu />
        </section>
      </NavMenus>
    </header>
  );
};