import VerySlowComponent from "@/components/slow/VerySlowComponent";
import BrowserModal from "@/components/stuff/BrowserModal";
import BunchOfStuff from "@/components/stuff/BunchOfStuff";
import OtherStuffAlsoComplicated from "@/components/stuff/OtherStuffAlsoComplicated";
import { Button, Modal } from "@mui/material";
import { useState } from "react";

// The re-render problem
// ---------------------
// Opening a modal whose state lives at the top of the app re-renders every component below it, 
// so a trivial dialog takes almost a second to appear.

// #region demo
const DashboardWithModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Open dialog</Button>
      <BrowserModal open={isOpen} onClose={() => setIsOpen(false)} />
      
      <VerySlowComponent />
      <BunchOfStuff />
      <OtherStuffAlsoComplicated />
    </div>
  );
};
// #endregion demo


export default DashboardWithModal;
