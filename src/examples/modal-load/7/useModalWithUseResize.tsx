import { useState } from "react";
import useResizeDetector from "./useResizeDetector";

//#region demo
const useModalWithUseResize = () => {
  const [isOpen, setIsOpen] = useState(false);
  useResizeDetector();

  return {
    isOpen,
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
  };
};
//#endregion demo

export default useModalWithUseResize;
