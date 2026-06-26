import { Button, Modal } from "@mui/material";
import useModalWithResize from "./useModalWithResize";
import VerySlowComponent from "@/components/slow/VerySlowComponent";
import BunchOfStuff from "@/components/stuff/BunchOfStuff";
import OtherStuffAlsoComplicated from "@/components/stuff/OtherStuffAlsoComplicated";

// Hidden State In A Hook
// ----------------------
// A custom hook that tracks window resize re-renders the entire app on every resize, 
// even though the width value is never returned from the hook.

const DashboardHookResizeModal = () => {
  const { isOpen, open, close } = useModalWithResize();

  return (
    <>
      <Button onClick={open}>Open dialog</Button>
      <Modal open={isOpen} onClose={close}>
        <div>modal content</div>
      </Modal>
      <VerySlowComponent />
      <BunchOfStuff />
      <OtherStuffAlsoComplicated />
    </>
  );
};

export default DashboardHookResizeModal;
