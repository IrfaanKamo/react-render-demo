import Button from "@/components/design/Button";
import useModalWithResize from "./useModalWithResize"
import VerySlowComponent from "@/components/slow/VerySlowComponent"
import BunchOfStuff from "@/components/stuff/BunchOfStuff"
import OtherComplicatedStuff from "@/components/stuff/OtherComplicatedStuff"
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
      <OtherComplicatedStuff />
    </div>
  )
}
//#endregion demo

export default DashboardHookResizeModal
