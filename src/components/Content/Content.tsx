import Box from "@mui/material/Box";
import SliderComponent from "~/components/SliderComponent/SliderComponent";
import ProductList from "~/components/ProductList/ProductList";

const Content = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <SliderComponent />
      <ProductList />
    </Box>
  );
};

export default Content;
