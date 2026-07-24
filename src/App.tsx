import "./index.css"
import { useState } from "react"
import RenderDemo from "./examples"

export function App() {
  const [startApp, setStartApp] = useState(false)
  if (startApp) {
    return <RenderDemo />
  }

  return (
    <button
      type="button"
      onClick={() => setStartApp(true)}
      className="group relative inline-flex h-14 items-center gap-3 overflow-hidden rounded-full bg-white px-8 text-base font-bold text-zinc-950 shadow-blue-200 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-200 hover:shadow-[0_16px_38px_rgba(163,230,53,0.32)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300 active:translate-y-0"
    >
      <span className="absolute inset-0 -translate-x-full bg-white/30 transition-transform duration-700 ease-out group-hover:translate-x-full" />
      <span className="relative">Let's start</span>
      <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-zinc-950 text-white transition-transform duration-300 group-hover:translate-x-1">
        <span aria-hidden="true" className="text-lg leading-none">
          &rarr;
        </span>
      </span>
    </button>
  )
}

export default App
