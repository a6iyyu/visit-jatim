import{j as t}from"./jsx-runtime.K1e75nIr.js";import{r as s}from"./index.NEDEFKed.js";const i="/_astro/scroll-to-top.C9USe0JD.png",a=()=>{const[o,r]=s.useState(!1),e=()=>{!o&&window.scrollY>25*16?r(!0):o&&window.scrollY<=25*16&&r(!1)},l=()=>{window.scrollTo({top:0,behavior:"smooth"})};return s.useEffect(()=>(window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)),[o]),t.jsx("div",{className:`h-24 w-24 bg-gray-800 cursor-pointer rounded-full fixed grid place-items-center z-30 hover:bg-gray-700 ${o?"visible opacity-100":"invisible opacity-0"} transition-all duration-300 ease-in-out bottom-8 right-8`,onClick:l,children:t.jsx("img",{src:i,className:"rotate-180",width:25})})};export{a as ScrollToTop};