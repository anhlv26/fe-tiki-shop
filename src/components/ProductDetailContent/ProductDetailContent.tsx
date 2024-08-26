import React from "react";
import Box from "@mui/material/Box";
import { Divider, Typography } from "@mui/material";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const ProductDetailContent = () => {
  return (
    <Box sx={{ bgcolor: "#F5F5FA" }}>
      <Box sx={{ bgcolor: "#fff", padding: "16px", borderRadius: "8px" }}>
        <Box sx={{ display: "flex" }}>
          <img
            src="https://salt.tikicdn.com/ts/upload/94/36/e7/c5297f3fad0a83fb56f98be877904467.png"
            style={{ height: "20px", marginRight: "8px" }}
          />
          <img
            src="https://salt.tikicdn.com/ts/upload/79/f2/2b/0acb752c679ef97d401857a41598bc70.png"
            style={{ height: "20px", marginRight: "8px" }}
          />
          <img
            src="https://salt.tikicdn.com/ts/upload/d7/56/04/b93b8c666e13f49971483596ef14800f.png"
            style={{ height: "20px", marginRight: "8px" }}
          />
        </Box>
        <Typography sx={{ fontSize: "20px", fontWeight: "400", m: "4px 0" }}>
          Yên những ngày nắng chẳng ghét những ngày mưa
        </Typography>
        <Box sx={{ display: "flex" }}>
          <Typography
            variant="body2"
            sx={{
              fontSize: "20px",
              color: "#FF4C57",
              fontWeight: "600",
            }}
          >
            60000d
          </Typography>
          <Box
            sx={{
              display: "flex",
              fontSize: "12px",
              bgcolor: "#F6F6FA",
              padding: "0px 4px",
              borderRadius: "10px",
              m: "0 6px",
              alignItems: "center",
            }}
          >
            -46%
          </Box>
          <Box
            sx={{
              display: "flex",

              bgcolor: "#FFDBDE",
              padding: "0px 4px",
              borderRadius: "10px",
              alignItems: "center",
            }}
          >
            <TrendingDownIcon sx={{ fontSize: "12px", color: "#FF424E" }} />
            <Typography sx={{ fontSize: "10px", ml: "2px", color: "#FF424E" }}>
              Giảm sâu
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          bgcolor: "#fff",
          padding: "16px",
          borderRadius: "8px",
          mt: "16px",
        }}
      >
        <Typography sx={{ fontSize: "16px", fontWeight: "600", mb: "4px" }}>
          Thông tin vận chuyển
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "8px 0",
          }}
        >
          <Typography sx={{ fontSize: "14px" }}>
            Giao đến Q. Hoàn Kiếm, P. Hàng Trống, Hà Nội
          </Typography>
          <Box sx={{ cursor: "pointer", color: "#1870FF" }}>Đổi</Box>
        </Box>
        <Divider />
        <Box sx={{ paddingTop: "8px" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src="https://salt.tikicdn.com/ts/upload/04/da/1e/eac32401f048ffd380e50dfeda2a1c55.png"
              style={{ height: "16px" }}
            />
            <Typography
              sx={{
                ml: "8px",
                fontSize: "14px",
                color: "rgb(39, 39, 42)",
                fontWeight: "500",
              }}
            >
              Giao siêu tốc 2h
            </Typography>
          </Box>
          <Typography>Trước 10h ngày mai: 25.000₫</Typography>
        </Box>
        <Box sx={{ padding: "8px 0" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src="https://salt.tikicdn.com/ts/upload/6b/59/d9/783a8f53f8c251dbe5f644df40c21c15.png"
              style={{ height: "16px" }}
            />
            <Typography
              sx={{
                ml: "8px",
                fontSize: "14px",
                color: "rgb(39, 39, 42)",
                fontWeight: "500",
              }}
            >
              Giao siêu tốc 2h
            </Typography>
          </Box>
          <Typography>Trước 10h ngày mai: 25.000₫</Typography>
        </Box>
      </Box>
      <Box
        sx={{
          bgcolor: "#fff",
          padding: "16px",
          borderRadius: "8px",
          mt: "16px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: "4px",
          }}
        >
          <Typography sx={{ fontSize: "16px", fontWeight: "600", mb: "4px" }}>
            An tâm mua sắm
          </Typography>
          <Box sx={{ cursor: "pointer", padding: "0 4px" }}>
            <ChevronRightIcon />
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", padding: "8px 0" }}>
          <img
            src="https://salt.tikicdn.com/ts/upload/c5/37/ee/76c708d43e377343e82baee8a0340297.png"
            style={{ width: "20px", height: "20px" }}
          />
          <Typography sx={{ ml: "8px" }}>
            Được đồng kiểm khi nhận hàng
          </Typography>
        </Box>
        <Divider />
        <Box sx={{ display: "flex", alignItems: "center", padding: "8px 0" }}>
          <img
            src="https://salt.tikicdn.com/ts/upload/ea/02/b4/b024e431ec433e6c85d4734aaf35bd65.png"
            style={{ width: "20px", height: "20px" }}
          />
          <Typography sx={{ ml: "8px" }}>
            Được hoàn tiền 200% nếu là hàng giả.
          </Typography>
        </Box>
        <Divider />
        <Box sx={{ display: "flex", alignItems: "center", padding: "8px 0" }}>
          <img
            src="	https://salt.tikicdn.com/ts/upload/d8/c7/a5/1cd5bd2f27f9bd74b2c340b8e27c4d82.png"
            style={{ width: "20px", height: "20px" }}
          />
          <Typography sx={{ ml: "8px" }}>
            Đổi trả miễn phí trong 30 ngày khi bạn đổi ý hoặc sản phẩm không
            đúng cam kết.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductDetailContent;
