import { useState } from "react";
import { Button, Modal } from "@mui/material";

const ExternalModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open dialog</Button>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <div>modal content</div>
      </Modal>
    </>
  );
};

export default ExternalModal
