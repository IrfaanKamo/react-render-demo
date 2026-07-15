import { useState } from "react";

//#region demo
const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return {
    isOpen,
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
  };
};
//#endregion demo

export default useModal;
