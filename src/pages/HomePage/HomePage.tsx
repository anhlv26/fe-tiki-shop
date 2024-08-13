import { Box } from "@mui/material";
import ContainerComponent from "~/components/ContainerComponent/ContainerComponent";
import Footer from "~/components/Footer/Footer";

const HomePage = () => {
  const typeProduct = ["Nồi cơm điện", "Máy giặt", "Máy tính", "Laptop"];
  return (
    <Box sx={{ display: "flex" }}>
      <ContainerComponent />
      {/* <Footer /> */}
    </Box>
  );
};

export default HomePage;
