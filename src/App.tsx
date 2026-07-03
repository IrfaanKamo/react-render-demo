import { Button } from "@mui/material"
import "./index.css"
import { useState } from "react"
import Dashboard from "./examples/modal-load/1/Dashboard"
import DashboardWithModal from "./examples/modal-load/2/DashboardWithModal"
import DashboardWithModalNoState from "./examples/modal-load/3/DashboardWithModalNoState"
import DashboardExternalModal from "./examples/modal-load/4/DashboardExternalModal"
import DashboardHookModal from "./examples/modal-load/5/DashboardHookModal"
import DashboardHookResizeModal from "./examples/modal-load/6/DashboardHookResizeModal"
import DashboardDoubleHookResizeModal from "./examples/modal-load/7/DashboardDoubleHookResizeModal"
import DashboardExternalHookModal from "./examples/modal-load/8/DashboardExternalHookModal"
import PageIntro from "./components/layout/PageIntro"

interface Heading {
  title: string
  subtitle: string
}

const _numberOfPages = 8

export function App() {
  const [currentPage, setCurrentPage] = useState(1)

  const handleNext = () => {
    setCurrentPage((prev) => {
      if (prev === _numberOfPages) {
        return prev
      }
      return prev + 1
    })
  }

  const headings: Array<Heading> = [
    {
      title: "1. The Slow App",
      subtitle: "An app that takes 500ms to do an initial render",
    },
    {
      title: "2. The re-render problem",
      subtitle:
        "Opening a modal whose state lives at the top of the app re-renders every component below it, so a trivial dialog takes almost a second to appear.",
    },
    {
      title: "3. The Big Re-renders Myth",
      subtitle: `Mutating a plain local variable instead of calling a state setter never re-renders, so the dialog never opens. Props changing don't cause re-renders; state updates do.`,
    },
    {
      title: "4. Moving State Down",
      subtitle:
        "Extracting the button, the dialog, and their state into a small child component keeps the re-render contained, and the dialog now opens instantly.",
    },
    {
      title: "5. State In A Custom Hook",
      subtitle: `Hiding the modal state inside a useModal hook still re-renders the whole component on every change: a hook abstracts state away but doesn't isolate it.`,
    },
    {
      title: "6. Hidden State In A Hook",
      subtitle:
        "A custom hook that tracks window resize re-renders the entire app on every resize, even though the width value is never returned from the hook.",
    },
    {
      title: "7. Hooks Calling Hooks",
      subtitle:
        "Even a hook that returns null re-renders its host: any state update anywhere in a chain of hooks re-renders the component that uses the first one.",
    },
    {
      title: "8. Isolating The Hook",
      subtitle:
        "The fix: move the button, dialog, and the custom hook into one small component so resize-driven re-renders stay contained instead of reaching the whole app.",
    },
  ]

  const displayCurrentExample = (exampleNumber: number) => {
    switch (exampleNumber) {
      case 1:
        return <Dashboard />
      case 2:
        return <DashboardWithModal />
      case 3:
        return <DashboardWithModalNoState />
      case 4:
        return <DashboardExternalModal />
      case 5:
        return <DashboardHookModal />
      case 6:
        return <DashboardHookResizeModal />
      case 7:
        return <DashboardDoubleHookResizeModal />
      case 8:
        return <DashboardExternalHookModal />
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="max-w-7xl p-8 text-center h-dvh">
      <div className="flex flex-col justify-between h-full">
        <PageIntro
          title={headings[currentPage - 1]!.title}
          subtitle={headings[currentPage - 1]!.subtitle}
        />
        {displayCurrentExample(currentPage)}
        <Button
          variant="outlined"
          onClick={handleNext}
          disabled={currentPage === _numberOfPages}
        >
          Next
        </Button>
      </div>
    </div>
  )
}

export default App
