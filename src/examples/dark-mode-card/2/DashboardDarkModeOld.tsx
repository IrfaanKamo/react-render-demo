import DarkModeCard from "./DarkModeCard"
import VerySlowComponent from "@/components/slow/VerySlowComponent"
import BunchOfStuff from "@/components/stuff/BunchOfStuff"
import OtherComplicatedStuff from "@/components/stuff/OtherComplicatedStuff"

// The Dark Mode
// ------------
// Our Features are now in a dark mode card

// #region demo
const DashboardDarkMode = () => {
  return (
    <DarkModeCard
      children={
        <>
          <VerySlowComponent />
          <BunchOfStuff />
          <OtherComplicatedStuff />
        </>
      }
    />
  )
}
// #endregion demo

export default DashboardDarkMode
