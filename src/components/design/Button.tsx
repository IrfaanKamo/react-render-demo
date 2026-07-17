import { Button as MuiButton } from "@mui/material";
import type { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  onClick: () => void
}

const Button = ({ onClick }: Props) => (
  <MuiButton variant="outlined" onClick={onClick}>Open dialog</MuiButton>
)

export default Button