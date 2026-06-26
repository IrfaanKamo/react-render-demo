import { useState } from "react";
import useResizeDetector from "./useResizeDetector";

const useModalWithUseResize = () => {
  const [isOpen, setIsOpen] = useState(false);
  useResizeDetector();

  return {
    isOpen,
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
  };
};

export default useModalWithUseResize;
