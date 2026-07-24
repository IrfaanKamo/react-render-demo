import VerySlowComponent from "@/components/slow/VerySlowComponent"
import BunchOfStuff from "@/components/stuff/BunchOfStuff"
import OtherComplicatedStuff from "@/components/stuff/OtherComplicatedStuff"
import { Typography } from "@mui/material"

// The Slow App
// ------------
// We have inherited a slow app that needs new features to be added

// #region demo
const Dashboard = () => {
  return (
    <div>
      <VerySlowComponent />
      <BunchOfStuff />
      <OtherComplicatedStuff />
    </div>
  )
}
// #endregion demo

export default Dashboard
