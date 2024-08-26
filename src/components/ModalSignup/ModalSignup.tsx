import { Box, Input, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import ButtonComponent from "~/components/ButtonComponent/ButtonComponent";

interface ModalSignupProps {
  open: boolean;
  handleClose: () => void;
}

const ModalSignup: React.FC<ModalSignupProps> = ({ open, handleClose }) => {
  const [hidden, setHidden] = useState(true);

  const handleHiddenPassword = () => {
    setHidden(!hidden);
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          boxShadow: 24,
          display: "flex",
          borderRadius: "20px",
        }}
      >
        <Box
          sx={{
            padding: "40px 45px 24px",
            width: "500px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography sx={{ fontSize: "20px", fontWeight: "500", mb: "6px" }}>
            Xin chào,
          </Typography>
          <Typography sx={{ mb: "20px" }}>
            Đăng nhập hoặc Tạo tài khoản
          </Typography>
          <Input
            placeholder="abc@email.com"
            disableUnderline
            sx={{
              borderBottom: "1px solid rgb(224, 224, 224)",
              pb: "6px",
              marginBottom: "16px",
            }}
          />

          <Box sx={{ position: "relative" }}>
            <Input
              placeholder="Mật khẩu"
              type={hidden ? "password" : "text"}
              disableUnderline
              sx={{
                borderBottom: "1px solid rgb(224, 224, 224)",
                pb: "6px",
                marginBottom: "16px",
                width: "100%",
              }}
            />
            <Typography
              onClick={handleHiddenPassword}
              component="span"
              sx={{
                position: "absolute",
                top: "5px",
                right: "0",
                cursor: "pointer",
                color: "rgb(13, 92, 182)",
              }}
            >
              {hidden ? "Hiện" : "Ẩn"}
            </Typography>
          </Box>

          <ButtonComponent
            fullWidth
            textButton="Đăng nhập"
            sx={{
              bgcolor: "rgb(255, 66, 78)",
              color: "#fff",
              border: "none",
              fontSize: "16px",
              mb: "20px",
              "&:hover": {
                bgcolor: "rgb(255, 66, 78)",
                color: "#fff",
              },
            }}
          />
          <Typography
            sx={{
              fontSize: "13px",
              color: "rgb(13, 92, 182)",
              cursor: "pointer",
            }}
          >
            Quên mật khẩu
          </Typography>
          <Box sx={{ display: "flex", mt: "10px" }}>
            <Typography sx={{ fontSize: "13px" }}>
              Chưa có tài khoản?
            </Typography>
            <Typography
              sx={{
                ml: "10px",
                fontSize: "13px",
                color: "rgb(13, 92, 182)",
                cursor: "pointer",
              }}
            >
              Tạo tài khoản
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            bgcolor: "#EDF7FF",
            width: "300px",
            borderBottomRightRadius: "20px",
          }}
        >
          <img
            src="https://salt.tikicdn.com/ts/upload/eb/f3/a3/25b2ccba8f33a5157f161b6a50f64a60.png"
            style={{ width: "203px", height: "203px" }}
          />
          <Typography
            sx={{
              color: "rgb(11, 116, 229)",
              fontSize: "17px",
              fontWeight: "500",
              margin: "30px 0 5px",
            }}
          >
            Mua sắm tại Tiki
          </Typography>
          <Typography sx={{ color: "rgb(11, 116, 229)", fontSize: "12px" }}>
            Siêu ưu đãi mỗi ngày
          </Typography>
        </Box>
        <Box
          onClick={handleClose}
          sx={{
            position: "absolute",
            top: "-21px",
            right: "-20px",
            cursor: "pointer",
          }}
        >
          <img
            src="https://salt.tikicdn.com/ts/upload/fe/20/d7/6d7764292a847adcffa7251141eb4730.png"
            style={{ width: "42px", height: "42px" }}
          />
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalSignup;
