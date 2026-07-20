import { RenderVisualizer } from "../design/RenderVisualiser"

const OtherStuffAlsoComplicated = () => {
  console.log("rendered: <OtherStuffAlsoComplicated />")
  return (
    <RenderVisualizer>
      <pre className=" text-green-700 my-2">
        <code>{"<OtherStuffAlsoComplicated />"}</code>
      </pre>
    </RenderVisualizer>
  )
}

export default OtherStuffAlsoComplicated
