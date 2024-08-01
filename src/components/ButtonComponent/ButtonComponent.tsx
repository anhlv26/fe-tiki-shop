import React, { ReactNode } from "react";
import Button from "@mui/material/Button";
import { ButtonProps } from "@mui/material";
import { styled } from "@mui/system";

interface ButtonComponentProps extends ButtonProps {
  backgroundColor?: string;
  colorCustom?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  children?: ReactNode;
  height?: string;
  padding?: string;
  borderRadius?: string;
}

const StyledButton = styled(Button)<ButtonComponentProps>(
  ({ backgroundColor, colorCustom }) => ({
    backgroundColor: backgroundColor || "primary",
    color: colorCustom || "primary",
    padding: "10px 20px",
    borderRadius: "6px",
    height: "40px",
  })
);

const ButtonComponent: React.FC<ButtonComponentProps> = (props) => {
  const { backgroundColor, color, padding, borderRadius, height, ...rest } =
    props;

  return <StyledButton {...rest}>{props.children}</StyledButton>;
};

export default ButtonComponent;
