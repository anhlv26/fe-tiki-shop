import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import VerifiedIcon from "@mui/icons-material/Verified";
import Divider from "@mui/material/Divider";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import AssignmentReturnIcon from "@mui/icons-material/AssignmentReturn";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import TextIntro from "~/components/TextIntro/TextIntro";

const Commitment = () => {
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        cursor: "pointer",
        padding: "10px 72px",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "end" }}>
        <TextIntro sx={{ mr: "20px" }}>Cam Kết</TextIntro>
        <Box sx={{ display: "flex" }}>
          <VerifiedIcon
            sx={{ color: "#0D48A6", fontSize: "18px", mr: "8px" }}
          />
          <Typography
            sx={{
              display: "flex",
              fontSize: "12px",
              fontWeight: "500",
              alignItems: "end",
            }}
          >
            100% hàng thật
          </Typography>
        </Box>
      </Box>
      <Divider
        sx={{ height: "auto", margin: "0 16px" }}
        orientation="vertical"
      />
      <Box sx={{ display: "flex", alignItems: "end" }}>
        <Box sx={{ display: "flex" }}>
          <CurrencyExchangeIcon
            sx={{ color: "#0D48A6", fontSize: "18px", mr: "8px" }}
          />
          <Typography
            sx={{
              display: "flex",
              fontSize: "12px",
              fontWeight: "500",
              alignItems: "end",
            }}
          >
            Hoàn 200% nếu hàng giả
          </Typography>
        </Box>
      </Box>
      <Divider
        sx={{ height: "auto", margin: "0 16px" }}
        orientation="vertical"
      />
      <Box sx={{ display: "flex", alignItems: "end" }}>
        <Box sx={{ display: "flex" }}>
          <AssignmentReturnIcon
            sx={{ color: "#0D48A6", fontSize: "18px", mr: "8px" }}
          />
          <Typography
            sx={{
              display: "flex",
              fontSize: "12px",
              fontWeight: "500",
              alignItems: "end",
            }}
          >
            30 ngày đổi trả
          </Typography>
        </Box>
      </Box>
      <Divider
        sx={{ height: "auto", margin: "0 16px" }}
        orientation="vertical"
      />
      <Box sx={{ display: "flex", alignItems: "end" }}>
        <Box sx={{ display: "flex" }}>
          <DeliveryDiningIcon
            sx={{ color: "#0D48A6", fontSize: "18px", mr: "8px" }}
          />
          <Typography
            sx={{
              display: "flex",
              fontSize: "12px",
              fontWeight: "500",
              alignItems: "end",
            }}
          >
            Giao nhanh 2h
          </Typography>
        </Box>
      </Box>
      <Divider
        sx={{ height: "auto", margin: "0 16px" }}
        orientation="vertical"
      />
      <Box sx={{ display: "flex", alignItems: "end" }}>
        <Box sx={{ display: "flex" }}>
          <LocalOfferIcon
            sx={{ color: "#0D48A6", fontSize: "18px", mr: "8px" }}
          />
          <Typography
            sx={{
              display: "flex",
              fontSize: "12px",
              fontWeight: "500",
              alignItems: "end",
            }}
          >
            Giá siêu rẻ
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Commitment;
