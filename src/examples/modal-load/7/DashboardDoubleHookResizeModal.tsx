import { Button, Modal } from "@mui/material";
import useModalWithUseResize from "./useModalWithUseResize";
import VerySlowComponent from "@/components/slow/VerySlowComponent";
import BunchOfStuff from "@/components/stuff/BunchOfStuff";
import OtherStuffAlsoComplicated from "@/components/stuff/OtherStuffAlsoComplicated";

const DashboardDoubleHookResizeModal = () => {
  const { isOpen, open, close } = useModalWithUseResize();

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

export default DashboardDoubleHookResizeModal;
