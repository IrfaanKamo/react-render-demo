import Button from "@/components/design/Button";
import useModal from "./useModal"
import VerySlowComponent from "@/components/slow/VerySlowComponent"
import BunchOfStuff from "@/components/stuff/BunchOfStuff"
import OtherComplicatedStuff from "@/components/stuff/OtherComplicatedStuff"
import BrowserModal from "@/components/stuff/BrowserModal"

// State In A Custom Hook
// ----------------------
// Hiding the modal state inside a useModal hook still re-renders the whole component
// on every change: a hook abstracts state away but doesn't isolate it.

//#region demo
const DashboardHookModal = () => {
  const { isOpen, open, close } = useModal()

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

export default DashboardHookModal
