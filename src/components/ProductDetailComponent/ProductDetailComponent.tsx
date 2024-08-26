import { Box, Grid } from "@mui/material";
import ProductDetailTitle from "~/components/ProductDetailTitle/ProductDetailTitle";
import ProductDetailRight from "~/components/ProductDetailRight/ProductDetailRight";
import ProductDetailContent from "~/components/ProductDetailContent/ProductDetailContent";

const ProductDetailComponent = () => {
  return (
    <Box sx={{ width: "100%", overflow: "hidden" }}>
      <Grid container spacing="24px">
        <Grid item md={4}>
          <ProductDetailTitle />
        </Grid>
        <Grid item md={5}>
          <ProductDetailContent />
        </Grid>
        <Grid item md={3}>
          <ProductDetailRight />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductDetailComponent;
