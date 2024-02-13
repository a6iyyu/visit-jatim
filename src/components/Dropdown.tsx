import React, { useEffect, useRef, useState, type RefObject } from "react";

export const Dropdown = ({options, name}: {options: string[]; name: string}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const dropdownRef: RefObject<HTMLDivElement> = useRef(null);

  const handleToggleDropdown = () => setIsExpanded(!isExpanded);
  const clickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsExpanded(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", clickOutside);
    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  }, []);

  return (
    <div className="" ref={dropdownRef}>
      <button
        onClick={handleToggleDropdown}
        className="text-base font-semibold transition-all duration-300 ease-in-out hover:underline"
        data-aos="fade-in"
      >
        {name}
      </button>
      {isExpanded && (
        <div
          className="absolute z-40 w-64 h-52 flex flex-col justify-evenly shadow-lg rounded-md top-24 bg-gray-50 text-slate-950"
          data-aos={isExpanded ? "fade-down" : "fade-up"}
        >
          {options.map((option, index) => (
            <a
              href={`/${option.toLowerCase().replace(/ /g, "%20").replace(/%20/g, "-")}`}
              className="cursor-pointer px-5 py-3 hover:bg-slate-100"
              key={index}
            >
              {option}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};