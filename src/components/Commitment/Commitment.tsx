import styles from "~/asset/styles/Commitment.module.scss";
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
    <Box className={styles.commitment}>
      <Box className={styles.commitment__section}>
        <TextIntro sx={{ mr: "20px" }}>Cam Kết</TextIntro>
        <Box sx={{ display: "flex" }}>
          <VerifiedIcon
            className={styles.commitment__icon}
            sx={{ fontSize: "18px" }}
          />
          <Typography className={styles.commitment__text} sx={{fontSize:"12px"}}>
            100% hàng thật
          </Typography>
        </Box>
      </Box>
      <Divider
        sx={{ height: "auto", margin: "0 16px" }}
        orientation="vertical"
      />
      <Box className={styles.commitment__section}>
        <Box sx={{ display: "flex" }}>
          <CurrencyExchangeIcon
            className={styles.commitment__icon}
            sx={{ fontSize: "18px" }}
          />
          <Typography className={styles.commitment__text} sx={{fontSize:"12px"}}>
            Hoàn 200% nếu hàng giả
          </Typography>
        </Box>
      </Box>
      <Divider
        sx={{ height: "auto", margin: "0 16px" }}
        orientation="vertical"
      />
      <Box className={styles.commitment__section}>
        <Box sx={{ display: "flex" }}>
          <AssignmentReturnIcon
            className={styles.commitment__icon}
            sx={{ fontSize: "18px" }}
          />
          <Typography className={styles.commitment__text} sx={{fontSize:"12px"}}>
            30 ngày đổi trả
          </Typography>
        </Box>
      </Box>
      <Divider
        sx={{ height: "auto", margin: "0 16px" }}
        orientation="vertical"
      />
      <Box className={styles.commitment__section}>
        <Box sx={{ display: "flex" }}>
          <DeliveryDiningIcon
            className={styles.commitment__icon}
            sx={{ fontSize: "18px" }}
          />
          <Typography className={styles.commitment__text} sx={{fontSize:"12px"}}>
            Giao nhanh 2h
          </Typography>
        </Box>
      </Box>
      <Divider
        sx={{ height: "auto", margin: "0 16px" }}
        orientation="vertical"
      />
      <Box className={styles.commitment__section}>
        <Box sx={{ display: "flex" }}>
          <LocalOfferIcon
            className={styles.commitment__icon}
            sx={{ fontSize: "18px" }}
          />
          <Typography className={styles.commitment__text} sx={{fontSize:"12px"}}>
            Giá siêu rẻ
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Commitment;
