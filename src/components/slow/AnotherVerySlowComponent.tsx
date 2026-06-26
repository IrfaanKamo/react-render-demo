import { wait } from "@/shared/timer";

const AnotherVerySlowComponent = () => {
  wait(1000);
  return null;
};

export default AnotherVerySlowComponent