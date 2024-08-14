import Box from "@mui/material/Box";
import SliderComponent from "~/components/SliderComponent/SliderComponent";
import ProductList from "~/components/ProductList/ProductList";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

const Content = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <SliderComponent />
      <ProductList />
      <ButtonComponent textButton="Xem thêm"/>
    </Box>
  );
};

export default Content;
