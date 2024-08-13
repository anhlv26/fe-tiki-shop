import { Typography } from "@mui/material";
import React from "react";

interface TitleFooterProps {
  children: React.ReactNode;
  sx?: React.CSSProperties;
}

const TitleFooter: React.FC<TitleFooterProps> = ({ children, sx }) => {
  return (
    <Typography
      sx={{
        fontSize: "16px",
        mb: "12px",
        lineHeight: "24px",
        fontWeight: "400",
        letterSpacing: "0.5px",
        ...sx,
      }}
    >
      {children}
    </Typography>
  );
};

export default TitleFooter;
