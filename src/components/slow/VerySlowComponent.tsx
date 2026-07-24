import { wait } from "@/shared/timer"
import { RenderVisualizer } from "../design/RenderVisualiser"

const VerySlowComponent = () => {
  wait(500)
  console.log("rendered: <VerySlowComponent />")
  return (
    <RenderVisualizer>
      <pre className="text-xl text-red-500 my-2">
        <code>{"<VerySlowComponent />"}</code>
      </pre>
    </RenderVisualizer>
  )
}

export default VerySlowComponent
