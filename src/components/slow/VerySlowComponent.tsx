import { wait } from "@/shared/timer";

const VerySlowComponent = () => {
  wait(500);
  return null;
};

export default VerySlowComponent