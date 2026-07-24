import { Typography } from "@mui/material"

interface Props {
  title: string
  subtitle: string
}

const PageIntro = ({ title, subtitle }: Props) => (
  <div>
    <Typography variant="h4">{title}</Typography>
    {/* <Typography variant="h6">{subtitle}</Typography> */}
  </div>
)

export default PageIntro
