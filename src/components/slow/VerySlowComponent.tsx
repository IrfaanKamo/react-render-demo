import { wait } from "@/shared/timer";

const VerySlowComponent = () => {
  wait(500);
  return (
    <div>
      My Very Slow Component
    </div>
  );
};

export default VerySlowComponent