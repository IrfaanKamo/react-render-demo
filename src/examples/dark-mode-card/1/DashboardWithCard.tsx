import VerySlowComponent from "@/components/slow/VerySlowComponent"
import BunchOfStuff from "@/components/stuff/BunchOfStuff"
import OtherComplicatedStuff from "@/components/stuff/OtherComplicatedStuff"
import { showContainer } from "@/shared/styles"
import { Switch } from "@mui/material"
import { useState } from "react"

// The Dark Mode
// ------------
// Our Features are now in a dark mode card

// #region demo
const DashboardWithCard = () => {
  const [isDark, setIsDark] = useState(false)

  return (
    <div className={showContainer(isDark)}>
      <Switch checked={isDark} onChange={() => setIsDark(!isDark)} /> Dark Mode
      <VerySlowComponent />
      <BunchOfStuff />
      <OtherComplicatedStuff />
    </div>
  )
}
// #endregion demo

export default DashboardWithCard
