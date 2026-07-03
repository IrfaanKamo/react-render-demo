import { Button } from "@mui/material"
import "./index.css"
import { useState } from "react"
import {
  _numberOfChapterOneExamples,
  chapter_one_examples,
} from "./examples/modal-load/examples"
import BrowserWindow from "./components/layout/BrowserWindow"

export function App() {
  const [currentPage, setCurrentPage] = useState(0)

  const handleNavigate = (direction: "next" | "prev") => {
    setCurrentPage((prev) => {
      if (direction === "next") {
        return prev < _numberOfChapterOneExamples ? prev + 1 : prev
      } else {
        return prev > 0 ? prev - 1 : prev
      }
    })
  }

  const example = chapter_one_examples[currentPage]!

  return (
    <div className="p-8 text-center h-dvh w-[80vw] relative mx-auto">
      <div className="flex flex-col justify-between items-center h-full w-full">
        {example.heading}
        <BrowserWindow>{example.app}</BrowserWindow>
        <div className="flex gap-2.5 justify-center">
          <Button
            variant="outlined"
            onClick={() => handleNavigate("prev")}
            disabled={currentPage === 0}
          >
            Previous
          </Button>
          <Button
            variant="outlined"
            onClick={() => handleNavigate("next")}
            disabled={currentPage === _numberOfChapterOneExamples}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}

export default App
