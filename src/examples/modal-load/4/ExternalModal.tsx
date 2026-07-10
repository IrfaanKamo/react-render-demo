import { useState } from "react";
import { Button } from "@mui/material";
import BrowserModal from "@/components/stuff/BrowserModal";

const ExternalModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Open dialog</Button>
      <BrowserModal open={isOpen} onClose={() => setIsOpen(false)}>
        <div>Speeeeed!! Look at how fast I am!</div>
      </BrowserModal>
    </div>
  );
};

export default ExternalModal
