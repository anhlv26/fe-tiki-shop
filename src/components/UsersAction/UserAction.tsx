import Divider from "@mui/material/Divider";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import React from "react";
import ModalSignup from "../ModalSignup/ModalSignup";

const UserAction = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <Box sx={{ display: "flex", width: "100%", justifyContent: "flex-end" }}>
      <Button
        sx={{
          borderRadius: "6px",
          height: "40px",
        }}
        startIcon={<HomeIcon sx={{ fontSize: "30px" }} />}
      >
        Trang chủ
      </Button>
      <Button
        onClick={handleOpen}
        sx={{ borderRadius: "6px", height: "40px" }}
        startIcon={<EmojiEmotionsIcon sx={{ fontSize: "30px" }} />}
      >
        Tài khoản
      </Button>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <Button
        sx={{
          borderRadius: "6px",
          height: "40px",
          display: "flex",
          paddingLeft: "6px",
          minWidth: 0,
          //   justifyContent: "flex-start",
        }}
      >
        <Badge
          badgeContent={2}
          color="primary"
          sx={{
            "& .MuiBadge-badge": {
              fontSize: "10px",
              height: "16px",
              borderRadius: "16px",
            },
          }}
        >
          <ShoppingCartIcon />
        </Badge>
      </Button>
      <ModalSignup open={open} handleClose={handleClose} />
    </Box>
  );
};

export default UserAction;
