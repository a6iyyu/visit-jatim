import React, { useEffect, useRef, useState, type RefObject } from "react";

export const AccordionMobile = ({options, name}: {options: string[]; name: string}) => {
  const [accordionOpen, setAccordionOpen] = useState(false);
  const accordionRef: RefObject<HTMLDivElement> = useRef(null);

  const handleOpenAccordion = () => setAccordionOpen(!accordionOpen);
  const clickOutside = (event: MouseEvent) => {
    if (
      accordionRef.current &&
      !accordionRef.current.contains(event.target as Node)
    ) {
      setAccordionOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", clickOutside);
    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  });

  return (
    <div
      onClick={handleOpenAccordion}
      className={`cursor-pointer font-semibold transition active:bg-transparent ${accordionOpen ? "hover:bg-transparent hover:text-slate-900" : "hover:bg-slate-900 hover:text-gray-50"}`}
      ref={accordionRef}
    >
      <button className="mt-4 flex w-full cursor-pointer justify-between px-10">
        <h3 className="pl-5">{name}</h3>
        <span>
          <i
            className={`bi ${accordionOpen ? "bi-chevron-up" : "bi-chevron-down"}`}
          ></i>
        </span>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-200 ease-in-out ${accordionOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <ul className="my-2 overflow-hidden bg-gray-200">
          {options.map((option, index) => (
            <li className="border-t-2 border-slate-900 py-3 hover:bg-slate-900 hover:text-gray-50">
              <a
                href={`/${option.toLowerCase().replace(/ /g, "%20").replace(/%20/g, "-")}`}
                className="flex cursor-pointer items-center"
                key={index}
              >
                <h2 className="pl-14">{option}</h2>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};