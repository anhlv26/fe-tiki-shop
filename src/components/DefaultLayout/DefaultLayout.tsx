import Box from "@mui/material/Box";
import React from "react";
import HeaderComponent from "~/components/HeaderComponent/HeaderComponent";
import Footer from "~/components/Footer/Footer";

const DefaultLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Box>
      <HeaderComponent />
      {children}
      <Footer />
    </Box>
  );
};

export default DefaultLayout;
