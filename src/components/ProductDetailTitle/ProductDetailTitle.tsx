import React from "react";
import { Box, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const ProductDetailTitle = () => {
  const smallImages = [
    {
      src: "https://salt.tikicdn.com/cache/100x100/ts/product/7f/9a/63/4a0aee6548dfa4f7ae9f95c1c46b983c.jpg.webp",
    },
    {
      src: "https://salt.tikicdn.com/cache/100x100/ts/product/56/6c/c3/9ad576a0c4afc32b8c29a412f65091de.png.webp",
    },
    {
      src: "https://salt.tikicdn.com/cache/100x100/ts/product/58/c0/b1/1705ea0d4c25cbf08b934272b0bda6c0.png.webp",
    },
  ];
  const desc = [
    {
      title: "Kết hợp tản văn và tô màu, tạo ra trải nghiệm độc đáo.",
    },
    {
      title: "Thế giới đầy màu sắc, truyền cảm hứng và chữa lành tâm hồn.",
    },
    {
      title:
        "Thông điệp sâu sắc về tình yêu, sự dũng cảm và chấp nhận cuộc sống.",
    },
  ];
  return (
    <Box sx={{ bgcolor: "#fff", borderRadius: "8px", padding: "16px" }}>
      <Box
        sx={{
          borderRadius: "8px",
          border: "1px solid rgb(235, 235, 240)",
          lineHeight: "0",
        }}
      >
        <img
          src="https://salt.tikicdn.com/cache/750x750/ts/product/7f/9a/63/4a0aee6548dfa4f7ae9f95c1c46b983c.jpg.webp"
          style={{ width: "100%", borderRadius: "8px" }}
        />
      </Box>
      <Box sx={{ display: "flex", marginTop: "8px" }}>
        {smallImages.map((item, index) => (
          <Box
            key={index}
            sx={{
              padding: "4px",
              borderRadius: "4px",
              border: "1px solid rgb(235, 235, 240)",
              mr: "8px",
              cursor: "pointer",
            }}
          >
            <img src={item.src} style={{ width: "44px" }} />
          </Box>
        ))}
      </Box>
      <Box sx={{ padding: "16px 0" }}>
        <Typography sx={{ fontSize: "16px", fontWeight: "600" }}>
          Đặc điểm nổi bật
        </Typography>
        <Box>
          {desc.map((item, index) => (
            <Box key={index} sx={{ display: "flex", padding: "8px 0" }}>
              <CheckCircleIcon
                sx={{
                  color: "#0A68FF",
                  fontSize: "16px",
                  marginTop: "2px",
                  mr: "4px",
                }}
              />
              <Typography>{item.title}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ProductDetailTitle;
