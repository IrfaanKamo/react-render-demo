import VerySlowComponent from "@/components/slow/VerySlowComponent";
import BunchOfStuff from "@/components/stuff/BunchOfStuff";
import OtherStuffAlsoComplicated from "@/components/stuff/OtherStuffAlsoComplicated";
import ExternalModalWithResize from "./ExternalModalWithResize";

// Isolating The Hook
// ------------------
// The fix: move the button, dialog, and the custom hook into one small component 
// so resize-driven re-renders stay contained instead of reaching the whole app.

const DashboardExternalHookModal = () => {
  return (
    <div>
      <ExternalModalWithResize />
      <VerySlowComponent />
      <BunchOfStuff />
      <OtherStuffAlsoComplicated />
    </div>
  );
};

export default DashboardExternalHookModal;
