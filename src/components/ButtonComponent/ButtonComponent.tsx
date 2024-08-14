import React, { ReactNode } from "react";
import Button from "@mui/material/Button";
import { Box, ButtonProps } from "@mui/material";
import { styled } from "@mui/system";

interface ButtonComponentProps extends ButtonProps {
  backgroundColor?: string;
  border?: string;
  colorCustom?: string;
  textButton?: string;
  onClick?: () => void;
}

const StyledButton = styled(Button)<ButtonComponentProps>(
  ({ backgroundColor, colorCustom, fullWidth, border }) => ({
    backgroundColor: backgroundColor || "transperent",
    border: border || "1px solid #556CD6",
    color: colorCustom || "#556CD6",
    padding: "10px 20px",
    borderRadius: "6px",
    height: "40px",
    width: fullWidth ? "100%" : "",
    marginTop: "12px",
  })
);

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  textButton,
  onClick,
  ...rest
}) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <StyledButton {...rest} onClick={onClick}>
        {textButton}
      </StyledButton>
    </Box>
  );
};

export default ButtonComponent;
