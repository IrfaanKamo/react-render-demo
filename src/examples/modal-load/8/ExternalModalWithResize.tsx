import { Button, Modal } from "@mui/material";
import useModalWithUseResize from "../7/useModalWithUseResize";

const ExternalModalWithResize = () => {
  const { isOpen, open, close } = useModalWithUseResize();

  return (
    <>
      <Button onClick={open}>Open dialog</Button>
      <Modal open={isOpen} onClose={close}>
        <div>modal content</div>
      </Modal>
    </>
  );
};

export default ExternalModalWithResize;
