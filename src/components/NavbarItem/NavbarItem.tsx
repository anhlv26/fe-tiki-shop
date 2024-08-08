import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextIntro from "~/components/TextIntro/TextIntro";

interface Link {
  src: string;
  label: string;
}

interface NavbarItemProps {
  title?: string;
  links: Link[];
}

const NavbarItem: React.FC<{ item: NavbarItemProps }> = ({ item }) => {
  const { title, links } = item;
  return (
    <Box>
      {title && (
        <TextIntro
          sx={{
            color: "#000",
            paddingLeft: "16px",
            mb: "8px",
          }}
        >
          {title}
        </TextIntro>
      )}

      {links.map((link, index) => (
        <Box
          key={index}
          sx={{
            "&:hover": {
              backgroundColor: "#E6E6E6",
            },
            display: "flex",
            alignItems: "center",
            padding: "8px 16px",
            cursor: "pointer",
            borderRadius: "8px",
            width: "100%",
          }}
        >
          <img
            style={{ width: "32px", height: "32px", marginRight: "8px" }}
            src={link.src}
          />
          <Typography>{link.label}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default NavbarItem;
