import styles from "~/asset/styles/Address.module.scss";
import Box from "@mui/material/Box";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import { Typography } from "@mui/material";

const Address = () => {
  return (
    <Box className={styles.container}>
      <FmdGoodIcon className={styles.locationIcon} />
      <Box className={styles.content}>
        Giao đến:
        <Typography className={styles.locationText}>
          Q.Hoàn Kiếm, P.Hàng Trống, Hà Nội
        </Typography>
      </Box>
    </Box>
  );
};

export default Address;
