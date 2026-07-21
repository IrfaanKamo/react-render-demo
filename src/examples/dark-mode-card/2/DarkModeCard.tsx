import React, { useState } from "react"
import { Switch } from "@mui/material"

// The Dark Mode
// ------------
// Our Features are now in a dark mode card

// #region demo
const DarkModeCard = ({ children }: React.PropsWithChildren) => {
  const [isDark, setIsDark] = useState(false)

  return (
    <div
      className={`mx-7 border rounded-md ${isDark ? "bg-gray-300" : "bg-white"} w-80 h-44`}
    >
      <Switch checked={isDark} onChange={() => setIsDark(!isDark)} /> Dark Mode
      {children}
    </div>
  )
}
// #endregion demo

export default DarkModeCard
