import VerySlowComponent from "@/components/slow/VerySlowComponent";
import BunchOfStuff from "@/components/stuff/BunchOfStuff";
import OtherStuffAlsoComplicated from "@/components/stuff/OtherStuffAlsoComplicated";
import ExternalModal from "./ExternalModal";

// Moving State Down
// -----------------
// Extracting the button, the dialog, and their state into a small child component 
// keeps the re-render contained, and the dialog now opens instantly.

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
