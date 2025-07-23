import { useEffect, useState } from "react";

export const useMobile = () => {
  const isMobile = window.innerWidth <= 768;

  const [isMobileView, setIsMobileView] = useState(isMobile);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileView]);

  return isMobileView;
};

export default useMobile;
