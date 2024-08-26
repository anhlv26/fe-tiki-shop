import {
  Box,
  Divider,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import { useState } from "react";

const ProductDetailRight = () => {
  const [quantity, setQuantity] = useState<number>(1);

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    }
  };
  return (
    <Box
      sx={{
        bgcolor: "#fff",
        borderRadius: "8px",
        padding: "16px",
        position: "sticky",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <img
          src="./src/asset/images/logos/logo2.webp"
          style={{ width: "40px", height: "40px" }}
        />
        <Box sx={{ ml: "4px" }}>
          <Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
            Tiki Trading
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src="./src/asset/officialver2.webp"
              style={{ height: "20px" }}
            />
            <Divider orientation="vertical" sx={{ mx: 1, height: "12px" }} />
            <Typography>4.7</Typography>
            <StarIcon
              sx={{
                fontSize: "18px",
                color: "#FFC400",
                mt: "-4px",
                ml: "2px",
              }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            border: "1px solid rgb(221, 221, 227)",
            width: "34px",
            height: "34px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "4px",
          }}
        >
          <ModeCommentOutlinedIcon sx={{ opacity: "0.8" }} />
        </Box>
      </Box>

      <Divider sx={{ m: "12px 0" }} />

      <Box sx={{ display: "flex", alignItems: "center" }}>
        <img
          src="https://salt.tikicdn.com/cache/100x100/ts/product/7f/9a/63/4a0aee6548dfa4f7ae9f95c1c46b983c.jpg.webp"
          style={{ width: "44px" }}
        />
        <Typography sx={{ ml: "4px" }}>Bản thường</Typography>
      </Box>

      {/* quantity */}
      <Box sx={{ mt: "12px" }}>
        <Typography sx={{ fontWeight: "500", mb: "8px" }}>Số lượng</Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            onClick={handleDecrease}
            disableRipple
            disabled={quantity <= 1}
            sx={{
              p: "4px",
              border: "1px solid #787878",
              borderRadius: "4px",
              "&:hover": {
                bgcolor: "#ECECEC",
                cursor: "default",
              },
              ...(quantity <= 1 && {
                opacity: 0.4,
                cursor: "not-allowed",
              }),
            }}
          >
            <RemoveIcon sx={{ color: "#787878" }} />
          </IconButton>
          <TextField
            type="number"
            value={quantity}
            onChange={handleInputChange}
            inputProps={{ min: 1 }}
            sx={{
              width: "40px",
              margin: "0 4px",

              "& .MuiInputBase-input": {
                padding: "4px",
                textAlign: "center",
                border: "1px solid #787878",
                borderRadius: "4px",
              },
            }}
          />
          <IconButton
            onClick={handleIncrease}
            disableRipple
            sx={{
              p: "4px",
              border: "1px solid #787878",
              borderRadius: "4px",
              "&:hover": {
                bgcolor: "#ECECEC",
                cursor: "default",
              },
            }}
          >
            <AddIcon sx={{ color: "#787878" }} />
          </IconButton>
        </Box>
      </Box>

      {/* prices */}
      <Box>
        <Typography
          sx={{
            mt: "16px",
            fontSize: "16px",
            fontWeight: "500",
            mb: "8px",
          }}
        >
          Tạm tính
        </Typography>
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: "500",
            position: "relative",
            width: "auto",
            display: "inline-block",
          }}
        >
          {quantity * 20000}
          <Typography
            component="span"
            sx={{
              textDecoration: "underline",
              position: "absolute",
              fontWeight: "500",
              top: "0",
              right: "-10px",
              display: "inline",
            }}
          >
            đ
          </Typography>
        </Typography>
      </Box>

      {/* button */}
      <Box>
        <ButtonComponent
          textButton="Mua ngay"
          fullWidth
          sx={{
            border: "none",
            bgcolor: "#FF424E",
            color: "#fff",
            "&:hover": {
              bgcolor: "#FF424E",
              color: "#fff",
            },
          }}
        />
        <ButtonComponent textButton="Thêm vào giỏ hàng" fullWidth />
      </Box>
    </Box>
  );
};

export default ProductDetailRight;
