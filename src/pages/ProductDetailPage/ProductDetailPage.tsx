import { Box, Typography } from "@mui/material";
import ProductDetailComponent from "~/components/ProductDetailComponent/ProductDetailComponent";

const ProductDetailPage = () => {
  return (
    <Box sx={{ bgcolor: "#F5F5FA", padding: "0 72px" }}>
      <Box>
        <Typography
          sx={{
            height: "40px",
            lineHeight: "40px",
            color: "rgb(128, 128, 137)",
            cursor: "pointer",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          Trang chu
        </Typography>
      </Box>
      <ProductDetailComponent />
    </Box>
  );
};

export default ProductDetailPage;
