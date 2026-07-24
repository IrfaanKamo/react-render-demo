import Button from "@/components/design/Button";
import useModalWithUseResize from "./useModalWithUseResize"
import VerySlowComponent from "@/components/slow/VerySlowComponent"
import BunchOfStuff from "@/components/stuff/BunchOfStuff"
import OtherComplicatedStuff from "@/components/stuff/OtherComplicatedStuff"
import BrowserModal from "@/components/stuff/BrowserModal"

// Hooks Calling Hooks
// -------------------
// Even a hook that returns null re-renders its host: any state update anywhere in a
// chain of hooks re-renders the component that uses the first one.

//#region demo
const DashboardDoubleHookResizeModal = () => {
  const { isOpen, open, close } = useModalWithUseResize()

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

export default DashboardDoubleHookResizeModal
