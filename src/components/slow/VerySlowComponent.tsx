import { wait } from "@/shared/timer"

const VerySlowComponent = () => {
  wait(500)
  return (
    <pre className=" text-green-700 my-3">
      <code>{'<VerySlowComponent />'}</code>
    </pre>
  )
}

export default VerySlowComponent
