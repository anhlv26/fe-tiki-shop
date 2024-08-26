import { CardContent, CardMedia, Divider, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import Box from "@mui/material/Box";
import styled from "styled-components";

interface ProdcuctItem {
  image: string;
  name: string;
  price: string;
}

const TruncatedBox = styled(Box)(({ theme }) => ({
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "normal",
}));

const ProductItem: React.FC<ProdcuctItem> = ({ image, name, price }) => {
  return (
    <Box
      sx={{
        maxWidth: 345,
        height: "100%",
        borderRadius: "8px",
        borderTopRightRadius: "8px",
        borderTopLeftRadius: "8px",
        overflow: "hidden",
        cursor: "pointer",
        border: "1px solid rgb(235, 235, 240)",
        "&:hover": {
          boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 20px",
          zIndex: 1,
        },
      }}
    >
      <CardMedia
        sx={{
          width: "100%",
          height: "176px",
        }}
        image={image}
        title="green iguana"
      />
      <CardContent sx={{ padding: "8px" }}>
        <Box sx={{ lineHeight: "0" }}>
          <img
            src="./src/asset/images/card/topdeal.png"
            style={{
              height: "20px",
            }}
          />
        </Box>
        <Box sx={{ margin: "4px 0" }}>
          <img
            src="./src/asset/images/card/offical.png"
            style={{ height: "20px" }}
          />
        </Box>
        <TruncatedBox sx={{ lineHeight: "0" }}>
          <Typography variant="body2" sx={{ fontSize: "12px" }}>
            {name}
          </Typography>
        </TruncatedBox>
        <Box sx={{ color: "#FFC70D", lineHeight: "0", margin: "4px 0" }}>
          <StarIcon sx={{ width: "12px", height: "12px" }} />
          <StarIcon sx={{ width: "12px", height: "12px" }} />
          <StarIcon sx={{ width: "12px", height: "12px" }} />
          <StarIcon sx={{ width: "12px", height: "12px" }} />
          <StarIcon sx={{ width: "12px", height: "12px" }} />
        </Box>

        <Typography
          variant="body2"
          sx={{
            fontSize: "16px",
            color: "#FF4C57",
            fontWeight: "600",
          }}
        >
          {price}
        </Typography>
        <Box sx={{ display: "flex" }}>
          <Box
            sx={{
              fontSize: "14px",
              bgcolor: "#F6F6FA",
              padding: "0px 6px",
              borderRadius: "10px",
              mr: "2px",
            }}
          >
            -46%
          </Box>
          <Typography
            variant="body2"
            sx={{
              fontSize: "12px",
              opacity: "0.7",
              textDecoration: "line-through",
            }}
          >
            25.990.000đ
          </Typography>
        </Box>
        <Divider sx={{ mt: "16px" }} />
        <Box sx={{ display: "flex", alignItems: "center", pt: "6px" }}>
          <img
            src="./src/asset/images/card/now.png"
            style={{ width: "32px" }}
          />
          <Typography
            variant="body2"
            sx={{
              ml: "4px",
              fontSize: "12px",
              opacity: "0.7",
              lineHeight: "0",
            }}
          >
            Giao hàng siêu tốc
          </Typography>
        </Box>
      </CardContent>
    </Box>
  );
};

export default ProductItem;
