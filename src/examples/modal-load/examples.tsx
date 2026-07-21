import PageIntro from "../../components/layout/PageIntro"
import Dashboard from "./1/Dashboard"
import DashboardWithModal from "./2/DashboardWithModal"
import DashboardWithModalNoState from "./3/DashboardWithModalNoState"
import DashboardExternalModal from "./4/DashboardExternalModal"
import DashboardHookModal from "./5/DashboardHookModal"
// import DashboardHookResizeModal from "./6/DashboardHookResizeModal"
// import DashboardDoubleHookResizeModal from "./7/DashboardDoubleHookResizeModal"
// import DashboardExternalHookModal from "./8/DashboardExternalHookModal"
import DashboardExternalHookModal from "./9/DashboardExternalHookModal"
import DashboardWithCard from "../dark-mode-card/1/DashboardWithCard"
import DashboardDarkMode from "../dark-mode-card/2/DashboardDarkMode"

export const chapter_one_examples = [
  {
    heading: (
      <PageIntro
        title={"1. The Slow App"}
        subtitle={"An app that takes 500ms to do an initial render"}
      />
    ),
    app: <Dashboard />,
  },
  {
    heading: (
      <PageIntro
        title={"2. The re-render problem"}
        subtitle={
          "Opening a modal whose state lives at the top of the app re-renders every component below it, so a trivial dialog takes almost a second to appear."
        }
      />
    ),
    app: <DashboardWithModal />,
  },
  {
    heading: (
      <PageIntro
        title={"3. The Big Re-renders Myth"}
        subtitle={`Mutating a plain local variable instead of calling a state setter never re-renders, so the dialog never opens. Props changing don't cause re-renders; state updates do.`}
      />
    ),
    app: <DashboardWithModalNoState />,
  },
  {
    heading: (
      <PageIntro
        title={"4. Moving State Down"}
        subtitle={
          "Extracting the button, the dialog, and their state into a small child component keeps the re-render contained, and the dialog now opens instantly."
        }
      />
    ),
    app: <DashboardExternalModal />,
  },
  {
    heading: (
      <PageIntro
        title={"5. State In A Custom Hook"}
        subtitle={`Hiding the modal state inside a useModal hook still re-renders the whole component on every change: a hook abstracts state away but doesn't isolate it.`}
      />
    ),
    app: <DashboardHookModal />,
  },
  {
    heading: (
      <PageIntro
        title={"6. Isolating the Hook"}
        subtitle=""
      />
    ),
    app: <DashboardExternalHookModal />,
  },
  {
    heading: (
      <PageIntro
        title={"7. Dark Mode Card"}
        subtitle=""
      />
    ),
    app: <DashboardWithCard />,
  },
  {
    heading: (
      <PageIntro
        title={"8. Introducing Children"}
        subtitle=""
      />
    ),
    app: <DashboardDarkMode />,
  },
  // {
  //   heading: (
  //     <PageIntro
  //       title={"6. Hidden State In A Hook"}
  //       subtitle={
  //         "A custom hook that tracks window resize re-renders the entire app on every resize, even though the width value is never returned from the hook."
  //       }
  //     />
  //   ),
  //   app: <DashboardHookResizeModal />,
  // },
  // {
  //   heading: (
  //     <PageIntro
  //       title={"7. Hooks Calling Hooks"}
  //       subtitle={
  //         "Even a hook that returns null re-renders its host: any state update anywhere in a chain of hooks re-renders the component that uses the first one."
  //       }
  //     />
  //   ),
  //   app: <DashboardDoubleHookResizeModal />,
  // },
  // {
  //   heading: (
  //     <PageIntro
  //       title={"8. Isolating The Hook"}
  //       subtitle={
  //         "The fix: move the button, dialog, and the custom hook into one small component so resize-driven re-renders stay contained instead of reaching the whole app."
  //       }
  //     />
  //   ),
  //   app: <DashboardExternalHookModal />,
  // },
] as const

export const _numberOfChapterOneExamples = chapter_one_examples.length
