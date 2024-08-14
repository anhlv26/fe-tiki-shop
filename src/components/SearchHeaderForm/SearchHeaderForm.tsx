import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import ButtonComponent from "~/components/ButtonComponent/ButtonComponent";
import { Button } from "@mui/material";

const SearchHeaderForm = () => {
  return (
    <Paper
      component="form"
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        height: 40,
        border: "1px solid #e5e5e5",
        boxShadow: "none",
        borderRadius: "6px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          paddingLeft: "20px",
        }}
      >
        <SearchIcon sx={{ fontWeight: "400", opacity: "0.5" }} />
      </Box>
      <InputBase
        sx={{ ml: 1, flex: 1, fontWeight: "400" }}
        placeholder="100% hàng tuyển chọn"
        inputProps={{ "aria-label": "search google maps" }}
      />
      <Divider sx={{ height: 28, ml: 0.5 }} orientation="vertical" />
      <Button
        color="primary"
        sx={{
          height: "100%",
        }}
      >
        Tìm kiếm
      </Button>
    </Paper>
  );
};

export default SearchHeaderForm;
