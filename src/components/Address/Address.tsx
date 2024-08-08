import Box from "@mui/material/Box";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import { Typography } from "@mui/material";

const Address = () => {
  return (
    <Box
      sx={{
        display: "flex",
        marginLeft: "-60px",
        padding: "10px 0",
        justifyContent: "flex-end",
      }}
    >
      <FmdGoodIcon sx={{ fontSize: "22px", marginLeft: "3px" }} />
      <Box sx={{ display: "flex" }}>
        Giao đến:
        <Typography sx={{ textDecoration: "underline", ml: "4px" }}>
          Q.Hoàn Kiếm, P.Hàng Trống, Hà Nội
        </Typography>
      </Box>
    </Box>
  );
};

export default Address;
