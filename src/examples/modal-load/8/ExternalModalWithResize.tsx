import { Button } from "@mui/material"
import useModalWithUseResize from "../7/useModalWithUseResize"
import BrowserModal from "@/components/stuff/BrowserModal"

//#region demo
const ExternalModalWithResize = () => {
  const { isOpen, open, close } = useModalWithUseResize()

  return (
    <div>
      <Button onClick={open}>Open dialog</Button>
      <BrowserModal open={isOpen} onClose={close}>
        <div>I can open much faster even with these multi hook calls</div>
      </BrowserModal>
    </div>
  )
}
//#endregion demo

export default ExternalModalWithResize
