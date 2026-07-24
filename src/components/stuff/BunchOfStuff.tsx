import { RenderVisualizer } from "../design/RenderVisualiser"

const BunchOfStuff = () => {
  console.log("rendered: <BunchOfStuff />")
  return (
    <RenderVisualizer>
      <pre className="text-xl text-green-700 my-2">
        <code>{"<BunchOfStuff />"}</code>
      </pre>
    </RenderVisualizer>
  )
}

export default BunchOfStuff
