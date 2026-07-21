import React, { useState } from "react"
import { Switch } from "@mui/material"
import { showContainer } from "@/shared/styles"

// The Dark Mode
// ------------
// Our Features are now in a dark mode card

// #region demo
const DarkModeCard = ({ children }: React.PropsWithChildren) => {
  const [isDark, setIsDark] = useState(false)

  return (
    <div className={showContainer(isDark)}>
      <Switch checked={isDark} onChange={() => setIsDark(!isDark)} /> Dark Mode
      {children}
    </div>
  )
}
// #endregion demo

export default DarkModeCard
