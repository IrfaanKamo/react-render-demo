import { Button, Modal } from "@mui/material";
import useModal from "./useModal";
import VerySlowComponent from "@/components/slow/VerySlowComponent";
import BunchOfStuff from "@/components/stuff/BunchOfStuff";
import OtherStuffAlsoComplicated from "@/components/stuff/OtherStuffAlsoComplicated";

const DashboardHookModal = () => {
  const { isOpen, open, close } = useModal();

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

export default DashboardHookModal;
