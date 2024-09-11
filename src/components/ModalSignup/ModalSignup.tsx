import { Box, Input, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import { useFormik } from "formik";
import ButtonComponent from "~/components/ButtonComponent/ButtonComponent";
import { SignupSchema, SigninSchema } from "~/validations/validationSchema";
import * as UserService from "~/services/UserService";
import { User } from "~/types/User";
import { useMutationHook } from "~/hooks/useMutationHook";
interface ModalSignupProps {
  open: boolean;
  handleClose: () => void;
  switchToSignin: () => void;
  switchToSignup: () => void;
  isSignup: boolean;
}

const ModalSignup: React.FC<ModalSignupProps> = ({
  open,
  handleClose,
  switchToSignin,
  switchToSignup,
  isSignup,
}) => {
  const [hiddenPassword, setHiddenPassword] = useState(true);
  const [hiddenConfirmPassword, setHiddenConfirmPassword] = useState(true);
  const [isFocused, setIsFocused] = useState(false);

  const mutationLogin = useMutationHook((data: User) => {
    return UserService.loginUser(data);
  });

  const mutationSignUp = useMutationHook((data: User) => {
    return UserService.signUpUser(data);
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: isSignup ? SignupSchema : SigninSchema,
    onSubmit: (values) => {
      if (isSignup) {
        mutationSignUp.mutate(values, {
          onSuccess: (data) => {
            // console.log("API signup call successful", data);
          },
          onError: (error) => {
            // console.error("API signup call failed", error);
          },
        });
      } else {
        console.log("login");

        const { confirmPassword, ...loginValues } = values;
        console.log("loginValues", loginValues);
        mutationLogin.mutate(loginValues, {
          onSuccess: (data) => {
            // console.log("API signin call successful", data);
          },
          onError: (error) => {
            // console.error("API signin call failed", error);
          },
        });
      }
    },
    validateOnChange: false,
    validateOnBlur: true,
  });

  const handleHiddenPassword = () => {
    setHiddenPassword(!hiddenPassword);
  };

  const handleHiddenConfirmPassword = () => {
    setHiddenConfirmPassword(!hiddenConfirmPassword);
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
          <form onSubmit={formik.handleSubmit}>
            <Input
              name="email"
              placeholder="abc@email.com"
              disableUnderline
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={(e) => {
                setIsFocused(false);
                formik.handleBlur(e);
              }}
              onFocus={() => setIsFocused(true)} // Khi focus vào input
              sx={{
                borderBottom: "1px solid rgb(224, 224, 224)",
                pb: "6px",
                marginTop: "16px",
                width: "100%",
              }}
            />
            {!isFocused && formik.touched.email && formik.errors.email ? (
              <Typography sx={{ color: "red" }}>
                {formik.errors.email}
              </Typography>
            ) : null}

            <Box sx={{ position: "relative" }}>
              <Input
                name="password"
                placeholder="Mật khẩu"
                type={hiddenPassword ? "password" : "text"}
                disableUnderline
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                sx={{
                  borderBottom: "1px solid rgb(224, 224, 224)",
                  pb: "6px",
                  marginTop: "16px",
                  width: "100%",
                }}
              />
              <Typography
                onClick={handleHiddenPassword}
                component="span"
                sx={{
                  position: "absolute",
                  bottom: "10px",
                  right: "0",
                  cursor: "pointer",
                  color: "rgb(13, 92, 182)",
                }}
              >
                {hiddenPassword ? "Hiện" : "Ẩn"}
              </Typography>
            </Box>
            {formik.touched.password && formik.errors.password ? (
              <Typography sx={{ color: "red" }}>
                {formik.errors.password}
              </Typography>
            ) : null}

            {isSignup && (
              <Box sx={{ position: "relative" }}>
                <Input
                  name="confirmPassword"
                  placeholder="Nhập lại khẩu"
                  type={hiddenConfirmPassword ? "password" : "text"}
                  disableUnderline
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  sx={{
                    borderBottom: "1px solid rgb(224, 224, 224)",
                    pb: "6px",
                    marginTop: "16px",
                    width: "100%",
                  }}
                />
                <Typography
                  onClick={handleHiddenConfirmPassword}
                  component="span"
                  sx={{
                    position: "absolute",
                    bottom: "10px",
                    right: "0",
                    cursor: "pointer",
                    color: "rgb(13, 92, 182)",
                  }}
                >
                  {hiddenConfirmPassword ? "Hiện" : "Ẩn"}
                </Typography>
                {formik.touched.confirmPassword &&
                formik.errors.confirmPassword ? (
                    <Typography sx={{ color: "red" }}>
                      {formik.errors.confirmPassword}
                    </Typography>
                  ) : null}
              </Box>
            )}

            {isSignup ? (
              <ButtonComponent
                fullWidth
                textButton="Đăng ký"
                type="submit"
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
            ) : (
              <ButtonComponent
                fullWidth
                textButton="Đăng nhập"
                type="submit"
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
            )}
          </form>
          <Typography
            sx={{
              fontSize: "13px",
              color: "rgb(13, 92, 182)",
              cursor: "pointer",
            }}
          >
            Quên mật khẩu
          </Typography>
          {isSignup ? (
            <Box sx={{ display: "flex", mt: "10px" }}>
              <Typography sx={{ fontSize: "13px" }}>
                Đã có tài khoản?
              </Typography>
              <Typography
                onClick={switchToSignin}
                sx={{
                  ml: "10px",
                  fontSize: "13px",
                  color: "rgb(13, 92, 182)",
                  cursor: "pointer",
                }}
              >
                Đăng nhập
              </Typography>
            </Box>
          ) : (
            <Box sx={{ display: "flex", mt: "10px" }}>
              <Typography sx={{ fontSize: "13px" }}>
                Chưa có tài khoản?
              </Typography>
              <Typography
                onClick={switchToSignup}
                sx={{
                  ml: "10px",
                  fontSize: "13px",
                  color: "rgb(13, 92, 182)",
                  cursor: "pointer",
                }}
              >
                Đăng ký
              </Typography>
            </Box>
          )}
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
