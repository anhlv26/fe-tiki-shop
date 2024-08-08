import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { HEADER_HEIGHT, PADDING_LEFT_RIGHT_PAGE } from "~/constants";
import TypeProduct from "~/components/TypeProduct/TypeProduct";
import Address from "~/components/Address/Address";
import SearchHeaderForm from "~/components/SearchHeaderForm/SearchHeaderForm";
import UserAction from "~/components/UsersAction/UserAction";
import Divider from "@mui/material/Divider";
import Commitment from "~/components/Commitment/Commitment";
import TextIntro from "~/components/TextIntro/TextIntro";

const HeaderComponent = () => {
  const typeProduct = ["Nồi cơm điện", "Máy giặt", "Máy tính", "Laptop"];
  return (
    <Box>
      <Box sx={{ width: "100%", position: "relative" }}>
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
                display: "flex",
                flexDirection: "column",
                height: "100%",
                lineHeight: HEADER_HEIGHT,
              }}
            >
              <img
                src="https://salt.tikicdn.com/ts/upload/0e/07/78/ee828743c9afa9792cf20d75995e134e.png"
                style={{ height: "40px", width: "96px" }}
              />
              <TextIntro
                sx={{ height: "42px", lineHeight: "42px", paddingLeft: "10px" }}
              >
                Tốt & Nhanh
              </TextIntro>
            </Grid>
            <Grid
              item
              md={8}
              // direction="row"
              sx={{
                height: "100%",
                alignItems: "center",
              }}
            >
              <SearchHeaderForm />
              <Box sx={{ display: "flex", padding: "10px 0" }}>
                {typeProduct.map((item) => (
                  <TypeProduct name={item} key={item} />
                ))}
              </Box>
            </Grid>
            <Grid
              item
              md={3}
              // direction="row"
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
        <Box sx={{ position: "absolute", bottom: 0, left: 0, width: "100%" }}>
          <Divider />
        </Box>
      </Box>
      <Commitment />
    </Box>
  );
};

export default HeaderComponent;
