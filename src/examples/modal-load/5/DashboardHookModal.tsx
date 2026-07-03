import { Button, Modal } from "@mui/material";
import useModal from "./useModal";
import VerySlowComponent from "@/components/slow/VerySlowComponent";
import BunchOfStuff from "@/components/stuff/BunchOfStuff";
import OtherStuffAlsoComplicated from "@/components/stuff/OtherStuffAlsoComplicated";

// State In A Custom Hook
// ----------------------
// Hiding the modal state inside a useModal hook still re-renders the whole component 
// on every change: a hook abstracts state away but doesn't isolate it.

const DashboardHookModal = () => {
  const { isOpen, open, close } = useModal();

  return (
    <div>
      <Button onClick={open}>Open dialog</Button>
      <Modal open={isOpen} onClose={close}>
        <div>modal content</div>
      </Modal>
      <VerySlowComponent />
      <BunchOfStuff />
      <OtherStuffAlsoComplicated />
    </div>
  );
};

export default DashboardHookModal;
