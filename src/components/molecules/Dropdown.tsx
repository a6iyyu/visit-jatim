import React, { useEffect, useRef, useState } from 'react';

const Dropdown = ({ options, name }: { options: string[], name: string }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const dropdownRef = useRef(null);

    const handleToggleDropdown = () => setIsExpanded(!isExpanded);
    const clickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsExpanded(false);
        }
    }
    useEffect(() => {
        document.addEventListener('mousedown', clickOutside)

        return () => {
            document.removeEventListener('mousedown', clickOutside)
        }
    }, [])

    return (
        <div className="" ref={dropdownRef}>
            <button onClick={handleToggleDropdown}
                className="text-base font-semibold transition-all hover:underline hover:text-gray-800"
                data-aos="fade-in"
            >
                {name}
            </button>
            {isExpanded && (
                <div className="absolute z-40 bg-gray-50 w-64 h-60 flex flex-col justify-evenly shadow-lg rounded-md top-24 text-slate-950"
                    data-aos={isExpanded ? "fade-down" : "fade-up"}
                >
                    {options.map((option, index) => (<a className="cursor-pointer px-5 py-3 hover:bg-slate-100" key={index}>{option}</a>))}
                </div>
            )}
        </div>
    );
};

export default Dropdown;
