import { Box } from "@mui/material";
import ContainerComponent from "~/components/ContainerComponent/ContainerComponent";

const HomePage = () => {
  const typeProduct = ["Nồi cơm điện", "Máy giặt", "Máy tính", "Laptop"];
  return (
    <Box sx={{ display: "flex" }}>
      <ContainerComponent />
    </Box>
  );
};

export default HomePage;
