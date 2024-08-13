import Box from "@mui/material/Box";
import React from "react";
import Footer from "~/components/Footer/Footer";

const FooterOnlyLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Box>
      {children}
      <Footer />
    </Box>
  );
};

export default FooterOnlyLayout;
