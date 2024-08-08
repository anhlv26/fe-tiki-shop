import { SxProps } from "@mui/material";
import Typography from "@mui/material/Typography";
import { FC, ReactNode } from "react";

interface TextIntroProps {
  children: ReactNode;
  sx?: SxProps;
}

const TextIntro: FC<TextIntroProps> = ({ children, sx }) => {
  return (
    <Typography
      sx={{
        color: "#0D48A6",
        fontWeight: 500,
        ...sx,
      }}
    >
      {children}
    </Typography>
  );
};

export default TextIntro;
