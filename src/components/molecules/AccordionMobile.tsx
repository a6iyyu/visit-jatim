import React, { useEffect, useRef, useState } from "react";

const AccordionMobile = ({options, name} : {options: string[], name: string}) => {
    const [accordionOpen, setAccordionOpen] = useState(false)
    const accordionRef = useRef(null)

    const handleOpenAccordion = () => setAccordionOpen(!accordionOpen)
    const clickOutside = (event: MouseEvent) => {
        if (accordionRef.current && !accordionRef.current.contains(event.target)) {
            setAccordionOpen(false);            
        }
    }
    useEffect(()=>{
        document.addEventListener('mousedown', clickOutside);

        return () => {
            document.removeEventListener('mousedown', clickOutside);
        }
    })

    return (
        <div onClick={handleOpenAccordion} className={`font-semibold transition active:bg-transparent cursor-pointer 
        ${accordionOpen ? 'hover:bg-transparent hover:text-slate-900':'hover:bg-slate-900 hover:text-gray-50'}`} ref={accordionRef}>
            <button className="px-10 flex justify-between w-full cursor-pointer mt-4">
                <h3 className="pl-5">{name}</h3>
                <span><i className={`bi ${accordionOpen? 'bi-chevron-up' : 'bi-chevron-down'}`}></i></span>
            </button>
            <div className={`grid overflow-hidden transition-all duration-200 ease-in-out 
            ${accordionOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <ul className="my-2 overflow-hidden bg-gray-200">
                        {options.map((option, index)=>(
                    <li className="border-t-2 border-slate-900 py-3 hover:bg-slate-900 hover:text-gray-50">

                        <a className="cursor-pointer flex items-center" key={index}><h2 className="pl-14"><i className="bi bi-chevron-right"></i>{option}</h2></a>
                        
                    </li>
                        ))}
                </ul>
            </div>
        </div>
    )
}
export default AccordionMobile;