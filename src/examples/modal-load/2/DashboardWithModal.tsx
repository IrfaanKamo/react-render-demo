import VerySlowComponent from "@/components/slow/VerySlowComponent";
import BunchOfStuff from "@/components/stuff/BunchOfStuff";
import OtherStuffAlsoComplicated from "@/components/stuff/OtherStuffAlsoComplicated";
import { Button, Modal } from "@mui/material";
import { useState } from "react";

// The re-render problem
// ---------------------
// Opening a modal whose state lives at the top of the app re-renders every component below it, 
// so a trivial dialog takes almost a second to appear.

const DashboardWithModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open dialog</Button>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <div>modal content</div>
      </Modal>
      
      <VerySlowComponent />
      <BunchOfStuff />
      <OtherStuffAlsoComplicated />
    </>
  );
};

export default DashboardWithModal;
