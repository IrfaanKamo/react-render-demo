import { Button } from "@mui/material";
import useModalWithUseResize from "./useModalWithUseResize";
import VerySlowComponent from "@/components/slow/VerySlowComponent";
import BunchOfStuff from "@/components/stuff/BunchOfStuff";
import OtherStuffAlsoComplicated from "@/components/stuff/OtherStuffAlsoComplicated";
import BrowserModal from "@/components/stuff/BrowserModal";

// Hooks Calling Hooks
// -------------------
// Even a hook that returns null re-renders its host: any state update anywhere in a 
// chain of hooks re-renders the component that uses the first one.

const DashboardDoubleHookResizeModal = () => {
  const { isOpen, open, close } = useModalWithUseResize();

  return (
    <div>
      <Button onClick={open}>Open dialog</Button>
      <BrowserModal open={isOpen} onClose={close}>
        <div>modal content</div>
      </BrowserModal>
      <VerySlowComponent />
      <BunchOfStuff />
      <OtherStuffAlsoComplicated />
    </div>
  );
};

export default DashboardDoubleHookResizeModal;
