import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Content from "~/components/Content/Content";
import Navbar from "~/components/Navbar/Navbar";

const ContainerComponent = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#F5F5FA",
        padding: "16px 72px 0 72px",
      }}
    >
      <Grid
        container
        columnSpacing={{ md: 2 }}
        sx={{
          display: "flex",
          width: "100%",
        }}
      >
        <Grid item md={2}>
          <Navbar />
        </Grid>
        <Grid item md={10}>
          <Content />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContainerComponent;
