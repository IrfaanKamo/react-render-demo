import { Button } from "@mui/material"
import useModal from "./useModal"
import VerySlowComponent from "@/components/slow/VerySlowComponent"
import BunchOfStuff from "@/components/stuff/BunchOfStuff"
import OtherStuffAlsoComplicated from "@/components/stuff/OtherStuffAlsoComplicated"
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
      <Button variant="outlined" onClick={open}>Open dialog</Button>
      <BrowserModal open={isOpen} onClose={close} />
      <VerySlowComponent />
      <BunchOfStuff />
      <OtherStuffAlsoComplicated />
    </div>
  )
}
//#endregion demo

export default DashboardHookModal
