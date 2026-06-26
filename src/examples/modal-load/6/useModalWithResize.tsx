import { useEffect, useState } from "react";

const useModalWithResize = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const listener = () => {
      setWidth(window.outerWidth);
    };

    window.addEventListener("resize", listener);

    return () => window.removeEventListener("resize", listener);
  }, []);

  return {
    isOpen,
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
  };
};

export default useModalWithResize;
