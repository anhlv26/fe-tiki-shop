import Box from "@mui/material/Box";
import NavbarItem from "~/components/NavbarItem/NavbarItem";
import navbarItems from "~/components/Navbar/navbarItems";

const Navbar = () => {
  const items = navbarItems;
  return (
    <Box
      sx={{
        backgroundColor: "#F5F5FA",
        position: "sticky",
        top: "0",
        overflowY: "scroll",
        scrollbarWidth: "none",
        maxHeight: "100vh"
      }}
    >
      {items.map((item, index) => (
        <Box
          sx={{
            display: "flex",
            width: "100%",
            bgcolor: "#fff",
            height: "100%",
            padding: "8px 12px",
            borderRadius: "8px",
            backgroundColor: "#fff",
            marginBottom: "16px",
            position: "relative",
          }}
        >
          <NavbarItem key={index} item={item} />
        </Box>
      ))}
    </Box>
  );
};

export default Navbar;
