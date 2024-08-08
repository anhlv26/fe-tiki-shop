import theme from "~/theme";
import Box from "@mui/material/Box";

const TypeProduct = (props: React.PropsWithChildren<{ name: string }>) => {

  const opacityColor = theme.palette.primary.opacityColor;
  return (
    <Box sx={{ paddingRight: "20px", color: `${opacityColor}`}}>
      {props.name}
    </Box>
  );
};

export default TypeProduct;
