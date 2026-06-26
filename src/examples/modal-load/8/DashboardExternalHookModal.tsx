import VerySlowComponent from "@/components/slow/VerySlowComponent";
import BunchOfStuff from "@/components/stuff/BunchOfStuff";
import OtherStuffAlsoComplicated from "@/components/stuff/OtherStuffAlsoComplicated";
import ExternalModalWithResize from "./ExternalModalWithResize";

const DashboardExternalHookModal = () => {
  return (
    <>
      <ExternalModalWithResize />
      <VerySlowComponent />
      <BunchOfStuff />
      <OtherStuffAlsoComplicated />
    </>
  );
};

export default DashboardExternalHookModal;
