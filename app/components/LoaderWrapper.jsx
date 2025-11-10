"use client";

import { useEffect, useState } from "react";

export default function LoaderWrapper({ children }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (document.readyState === "complete") {
      setIsLoaded(true);
      return;
    }

    const handleLoad = () => setIsLoaded(true);
    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <>
      {!isLoaded && (
        <div className="page-loader">
          
          <div className="page-loader__text">Abu Daud</div>
        </div>
      )}
      <div className={isLoaded ? "page-content" : "page-content page-content--hidden"}>
        {children}
      </div>
    </>
  );
}

