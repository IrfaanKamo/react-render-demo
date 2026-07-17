import Button from "@/components/design/Button";
import useModalWithUseResize from "../7/useModalWithUseResize"
import BrowserModal from "@/components/stuff/BrowserModal"

//#region demo
const ExternalModalWithResize = () => {
  const { isOpen, open, close } = useModalWithUseResize()

  return (
    <div>
      <Button onClick={open}>Open dialog</Button>
      <BrowserModal open={isOpen} onClose={close} />
    </div>
  )
}
//#endregion demo

export default ExternalModalWithResize
