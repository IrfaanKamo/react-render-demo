import { Modal, type BackdropProps, type ModalProps } from "@mui/material"

const BrowserModal = ({
  children,
  open,
  onClose,
  sx = {},
  slotProps = {},
  ...rest
}: ModalProps) => {
  const backdropOverrides: Partial<BackdropProps> = {
    ...(slotProps?.backdrop as Partial<BackdropProps>),
    sx: {
      position: "absolute",
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
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Modal>
  )
}

export default BrowserModal
