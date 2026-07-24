import VerySlowComponent from "@/components/slow/VerySlowComponent";
import BunchOfStuff from "@/components/stuff/BunchOfStuff";
import OtherComplicatedStuff from "@/components/stuff/OtherComplicatedStuff";
import ExternalModal from "./ExternalModal";

// Moving State Down
// -----------------
// Extracting the button, the dialog, and their state into a small child component 
// keeps the re-render contained, and the dialog now opens instantly.

// #region demo
const DashboardExternalModal = () => {
  
  return (
    <div>
      <ExternalModal />      
      <VerySlowComponent />
      <BunchOfStuff />
      <OtherComplicatedStuff />
    </div>
  );
};
// #endregion demo

export default DashboardExternalModal;
