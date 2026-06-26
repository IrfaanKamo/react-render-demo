import VerySlowComponent from "@/components/slow/VerySlowComponent";
import BunchOfStuff from "@/components/stuff/BunchOfStuff";
import OtherStuffAlsoComplicated from "@/components/stuff/OtherStuffAlsoComplicated";

import ExternalModal from "./ExternalModal";

const DashboardWithModal = () => {
  
  return (
    <>
      <ExternalModal />      
      <VerySlowComponent />
      <BunchOfStuff />
      <OtherStuffAlsoComplicated />
    </>
  );
};

export default DashboardWithModal;
