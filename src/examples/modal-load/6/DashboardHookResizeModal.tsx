import { Button } from "@mui/material"
import useModalWithResize from "./useModalWithResize"
import VerySlowComponent from "@/components/slow/VerySlowComponent"
import BunchOfStuff from "@/components/stuff/BunchOfStuff"
import OtherStuffAlsoComplicated from "@/components/stuff/OtherStuffAlsoComplicated"
import BrowserModal from "@/components/stuff/BrowserModal"

// Hidden State In A Hook
// ----------------------
// A custom hook that tracks window resize re-renders the entire app on every resize,
// even though the width value is never returned from the hook.

//#region demo
const DashboardHookResizeModal = () => {
  const { isOpen, open, close } = useModalWithResize()

  return (
    <div>
      <Button onClick={open}>Open dialog</Button>
      <BrowserModal open={isOpen} onClose={close} />
      <VerySlowComponent />
      <BunchOfStuff />
      <OtherStuffAlsoComplicated />
    </div>
  )
}
//#endregion demo

export default DashboardHookResizeModal
