import VerySlowComponent from "@/components/slow/VerySlowComponent";
import BunchOfStuff from "@/components/stuff/BunchOfStuff";
import OtherStuffAlsoComplicated from "@/components/stuff/OtherStuffAlsoComplicated";
import { Button, Modal } from "@mui/material";
import { useState } from "react";

const DashboardWithModalNoState = () => {
  let isOpen = false;
  
  return (
    <>
      <Button onClick={() => isOpen = true}>Open dialog</Button>
      <Modal open={isOpen} onClose={() => isOpen = false}>
        <div>modal content</div>
      </Modal>
      
      <VerySlowComponent />
      <BunchOfStuff />
      <OtherStuffAlsoComplicated />
    </>
  );
};

export default DashboardWithModalNoState;
