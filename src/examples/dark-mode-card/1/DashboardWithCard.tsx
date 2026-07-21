import VerySlowComponent from "@/components/slow/VerySlowComponent"
import BunchOfStuff from "@/components/stuff/BunchOfStuff"
import OtherStuffAlsoComplicated from "@/components/stuff/OtherStuffAlsoComplicated"
import { Switch } from "@mui/material"
import { useState } from "react"

// The Dark Mode
// ------------
// Our Features are now in a dark mode card

// #region demo
const DashboardWithCard = () => {
  const [isDark, setIsDark] = useState(false)

  return (
    <div
      className={`mx-7 border rounded-md ${isDark ? "bg-gray-300" : "bg-white"} w-80 h-44`}
    >
      <Switch checked={isDark} onChange={() => setIsDark(!isDark)} /> Dark Mode
      <VerySlowComponent />
      <BunchOfStuff />
      <OtherStuffAlsoComplicated />
    </div>
  )
}
// #endregion demo

export default DashboardWithCard
