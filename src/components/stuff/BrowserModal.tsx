import { Modal, type BackdropProps, type ModalProps } from "@mui/material"

const BrowserModal = ({
  open,
  onClose,
  sx = {},
  slotProps = {},
  ...rest
}: Omit<ModalProps, 'children'>) => {
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
      <div
        style={{
          position: "relative",
          outline: "none",
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          boxShadow:
            "0px 20px 25px -5px rgba(0,0,0,0.1), 0px 10px 10px -5px rgba(0,0,0,0.04)",
          width: "100%",
          maxWidth: "480px",
          padding: "24px",
          boxSizing: "border-box",
          border: "1px solid #e2e8f0",
        }}
      >
        <div>I am a modal</div>
      </div>
    </Modal>
  )
}

export default BrowserModal
