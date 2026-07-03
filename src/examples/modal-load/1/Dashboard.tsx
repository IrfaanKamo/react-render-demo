import VerySlowComponent from "@/components/slow/VerySlowComponent"
import BunchOfStuff from "@/components/stuff/BunchOfStuff"
import OtherStuffAlsoComplicated from "@/components/stuff/OtherStuffAlsoComplicated"
import { Typography } from "@mui/material"

// The Slow App
// ------------
// We have inherited a slow app that needs new features to be added

const Dashboard = () => {
  return (
    <div>
      <VerySlowComponent />
      <BunchOfStuff />
      <OtherStuffAlsoComplicated />
    </div>
  )
}

export default Dashboard
