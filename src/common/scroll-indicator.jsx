import { useState } from "react";

export const ScrollIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const ScrollPercentage = () => {
    const ScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const Percentage = (window.scrollY / ScrollHeight) * 100;
    setScrollProgress(Percentage);
  };

  window.addEventListener("scroll", ScrollPercentage);

  return <section className="fixed inset-0 top-24 z-50 h-1 bg-blue-500 lg:top-36" style={{ width: `${scrollProgress}` + "%" }}></section>;
};