import VerySlowComponent from "@/components/slow/VerySlowComponent";
import BunchOfStuff from "@/components/stuff/BunchOfStuff";
import OtherStuffAlsoComplicated from "@/components/stuff/OtherStuffAlsoComplicated";
import ExternalModal from "./ExternalModal";

// Isolating The Hook
// ------------------
// The fix: move the button, dialog, and the custom hook into one small component 
// so re-renders stay contained instead of reaching the whole app.

//#region demo
const DashboardExternalHookModal = () => {
  return (
    <div>
      <ExternalModal />
      <VerySlowComponent />
      <BunchOfStuff />
      <OtherStuffAlsoComplicated />
    </div>
  );
};
//#endregion demo

export default DashboardExternalHookModal;
