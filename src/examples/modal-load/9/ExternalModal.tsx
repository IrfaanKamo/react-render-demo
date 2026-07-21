import Button from "@/components/design/Button";
import BrowserModal from "@/components/stuff/BrowserModal"
import useModal from "./useModal";

//#region demo
const ExternalModal = () => {
  const { isOpen, open, close } = useModal()

  return (
    <div>
      <Button onClick={open}>Open dialog</Button>
      <BrowserModal open={isOpen} onClose={close} />
    </div>
  )
}
//#endregion demo

export default ExternalModal
