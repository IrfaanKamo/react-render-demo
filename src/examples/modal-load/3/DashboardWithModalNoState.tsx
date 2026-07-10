import VerySlowComponent from "@/components/slow/VerySlowComponent";
import BrowserModal from "@/components/stuff/BrowserModal";
import BunchOfStuff from "@/components/stuff/BunchOfStuff";
import OtherStuffAlsoComplicated from "@/components/stuff/OtherStuffAlsoComplicated";
import { Button } from "@mui/material";

// The Big Re-renders Myth
// Mutating a plain local variable instead of calling a state setter never re-renders, 
// so the dialog never opens. Props changing don't cause re-renders; state updates do.

const DashboardWithModalNoState = () => {
  let isOpen = false;
  
  return (
    <div>
      <Button onClick={() => isOpen = true}>Open dialog</Button>
      <BrowserModal open={isOpen} onClose={() => isOpen = false}>
        <div>modal content</div>
      </BrowserModal>
      
      <VerySlowComponent />
      <BunchOfStuff />
      <OtherStuffAlsoComplicated />
    </div>
  );
};

export default DashboardWithModalNoState;
