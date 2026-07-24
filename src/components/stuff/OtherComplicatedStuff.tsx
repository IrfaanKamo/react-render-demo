import { RenderVisualizer } from "../design/RenderVisualiser"

const OtherComplicatedStuff = () => {
  console.log("rendered: <OtherStuffAlsoComplicated />")
  return (
    <RenderVisualizer>
      <pre className="text-xl text-green-700 my-2">
        <code>{"<OtherComplicatedStuff />"}</code>
      </pre>
    </RenderVisualizer>
  )
}

export default OtherComplicatedStuff
