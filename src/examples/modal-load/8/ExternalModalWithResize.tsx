import { Button } from "@mui/material";
import useModalWithUseResize from "../7/useModalWithUseResize";
import BrowserModal from "@/components/stuff/BrowserModal";

const ExternalModalWithResize = () => {
  const { isOpen, open, close } = useModalWithUseResize();

  return (
    <div>
      <Button onClick={open}>Open dialog</Button>
      <BrowserModal open={isOpen} onClose={close}>
        <div>modal content</div>
      </BrowserModal>
    </div>
  );
};

export default ExternalModalWithResize;
