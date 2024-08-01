import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { HEADER_HEIGHT, PADDING_LEFT_RIGHT_PAGE } from "~/constants";
import TypeProduct from "../TypeProduct/TypeProduct";
import Address from "../Address/Address";
import SearchHeaderForm from "../SearchHeaderForm/SearchHeaderForm";
import UserAction from "../UsersAction/UserAction";

const HeaderComponent = () => {
  return (
    <Box
      sx={{
        width: "100%",
        padding: PADDING_LEFT_RIGHT_PAGE,
        paddingTop: "4px",
      }}
    >
      <Grid
        container
        sx={{
          height: HEADER_HEIGHT,
          width: "100%",
        }}
      >
        <Grid
          item
          md={1}
          sx={{
            height: "100%",
            lineHeight: HEADER_HEIGHT,
          }}
        >
          VANH
        </Grid>
        <Grid
          item
          md={8}
          direction="row"
          sx={{
            height: "100%",
            alignItems: "center",
          }}
        >
          <SearchHeaderForm />
          <TypeProduct />
        </Grid>
        <Grid
          item
          md={3}
          direction="row"
          sx={{
            height: "100%",
            paddingLeft: "60px",
            alignItems: "center",
          }}
        >
          <UserAction />
          <Address />
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeaderComponent;
