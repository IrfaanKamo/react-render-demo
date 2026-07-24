import { Modal, type BackdropProps, type ModalProps } from "@mui/material"

const BrowserModal = ({
  open,
  onClose,
  sx = {},
  slotProps = {},
  ...rest
}: Omit<ModalProps, "children">) => {
  const backdropOverrides: Partial<BackdropProps> = {
    ...(slotProps?.backdrop as Partial<BackdropProps>),
    sx: {
      position: "absolute",
      backgroundColor: "rgba(15, 23, 42, 0.3)",
      backdropFilter: "blur(4px)",
      ...((slotProps?.backdrop as Partial<BackdropProps>)?.sx || {}),
    },
  }

  return (
    <Modal
      open={open}
      onClose={onClose}
      disablePortal
      slotProps={{
        ...slotProps,
        backdrop: backdropOverrides,
      }}
      sx={{
        position: "absolute",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 3,
        ...sx,
      }}
      {...rest}
    >
      <div className="relative w-full max-w-[480px] rounded-xl border border-slate-200 bg-white p-6 shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_10px_10px_-5px_rgba(0,0,0,0.04)] outline-none box-border">
        <button
          type="button"
          aria-label="Close modal"
          onClick={() => onClose?.({}, "escapeKeyDown")}
          className="absolute right-4 top-4 rounded-full p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <pre className="text-xl text-blue-500 my-2">
          <code>{"<Modal />"}</code>
        </pre>
      </div>
    </Modal>
  )
}

export default BrowserModal
