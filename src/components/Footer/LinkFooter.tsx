import { Typography } from "@mui/material";
import React from "react";

interface LinkFooterProps {
  children: React.ReactNode;
  sx?: React.CSSProperties;
}

const LinkFooter: React.FC<LinkFooterProps> = ({ children, sx }) => {
  return (
    <Typography
      sx={{
        color: "rgb(128, 128, 137)",
        mb: "8px",
        lineHeight: "16px",
        fontSize: "13px",
        fontWeight: "400",
        cursor: "pointer",
        ...sx,
        "&:hover": {
          textDecoration: "underline",
        },
      }}
    >
      {children}
    </Typography>
  );
};

export default LinkFooter;
