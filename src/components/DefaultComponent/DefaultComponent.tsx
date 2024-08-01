import { Box } from "@mui/material";
import React from "react";
import HeaderComponent from "../HeaderComponent/HeaderComponent";

const DefaultComponent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Box>
      <HeaderComponent />
      {children}
    </Box>
  );
};

export default DefaultComponent;
