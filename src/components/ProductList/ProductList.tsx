import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ProductItem from "../ProductItem/ProductItem";

const ProductList = () => {
  const dataProds = [
    {
      id: 1,
      name: "Điện thoại Samsung Galaxy Z Flip 6 (8GB/256GB) - Độc quyền online - Hàng chính hãng",
      price: "25.990.000đ",
      image:
        "https://salt.tikicdn.com/cache/280x280/ts/product/a8/12/01/48a6a079df07937294bcca6d788eeb06.jpg.webp",
      rating: 4.5,
    },
    {
      id: 1,
      name: "Điện thoại Samsung Galaxy Z Flip 6 (8GB/256GB) - Độc quyền online - Hàng chính hãng",
      price: "25.990.000đ",
      image:
        "https://salt.tikicdn.com/cache/280x280/ts/product/a8/12/01/48a6a079df07937294bcca6d788eeb06.jpg.webp",
      rating: 4.5,
    },
    {
      id: 1,
      name: "Điện thoại Samsung Galaxy Z Flip 6 (8GB/256GB) - Độc quyền online - Hàng chính hãng",
      price: "25.990.000đ",
      image:
        "https://salt.tikicdn.com/cache/280x280/ts/product/a8/12/01/48a6a079df07937294bcca6d788eeb06.jpg.webp",
      rating: 4.5,
    },
    {
      id: 1,
      name: "Điện thoại Samsung Galaxy Z Flip 6 (8GB/256GB) - Độc quyền online - Hàng chính hãng",
      price: "25.990.000đ",
      image:
        "https://salt.tikicdn.com/cache/280x280/ts/product/a8/12/01/48a6a079df07937294bcca6d788eeb06.jpg.webp",
      rating: 4.5,
    },
    {
      id: 1,
      name: "Điện thoại Samsung Galaxy Z Flip 6 (8GB/256GB) - Độc quyền online - Hàng chính hãng",
      price: "25.990.000đ",
      image:
        "https://salt.tikicdn.com/cache/280x280/ts/product/a8/12/01/48a6a079df07937294bcca6d788eeb06.jpg.webp",
      rating: 4.5,
    },
    {
      id: 1,
      name: "Điện thoại Samsung Galaxy Z Flip 6 (8GB/256GB) - Độc quyền online - Hàng chính hãng",
      price: "25.990.000đ",
      image:
        "https://salt.tikicdn.com/cache/280x280/ts/product/a8/12/01/48a6a079df07937294bcca6d788eeb06.jpg.webp",
      rating: 4.5,
    },
    {
      id: 1,
      name: "Điện thoại Samsung Galaxy Z Flip 6 (8GB/256GB) - Độc quyền online - Hàng chính hãng",
      price: "25.990.000đ",
      image:
        "https://salt.tikicdn.com/cache/280x280/ts/product/a8/12/01/48a6a079df07937294bcca6d788eeb06.jpg.webp",
      rating: 4.5,
    },
    {
      id: 1,
      name: "Điện thoại Samsung Galaxy Z Flip 6 (8GB/256GB) - Độc quyền online - Hàng chính hãng",
      price: "25.990.000đ",
      image:
        "https://salt.tikicdn.com/cache/280x280/ts/product/c9/d0/77/6a15798480ff7fa5909ff1e8ed9ecd58.png.webp",
      rating: 4.5,
    },
    {
      id: 1,
      name: "Điện thoại Samsung Galaxy Z Flip 6 (8GB/256GB) - Độc quyền online - Hàng chính hãng",
      price: "25.990.000đ",
      image:
        "https://salt.tikicdn.com/cache/280x280/ts/product/8a/50/a0/5df41f23fad1a30d0f753e533e2aa2cf.jpg.webp",
      rating: 4.5,
    },
    {
      id: 1,
      name: "Điện thoại Samsung Galaxy Z Flip 6 (8GB/256GB) - Độc quyền online - Hàng chính hãng",
      price: "25.990.000đ",
      image:
        "https://salt.tikicdn.com/cache/280x280/ts/product/8a/50/a0/5df41f23fad1a30d0f753e533e2aa2cf.jpg.webp",
      rating: 4.5,
    },
    {
      id: 1,
      name: "Điện thoại Samsung Galaxy Z Flip 6 (8GB/256GB) - Độc quyền online - Hàng chính hãng",
      price: "25.990.000đ",
      image:
        "https://salt.tikicdn.com/cache/280x280/ts/product/8a/50/a0/5df41f23fad1a30d0f753e533e2aa2cf.jpg.webp",
      rating: 4.5,
    },
    {
      id: 1,
      name: "Điện thoại Samsung Galaxy Z Flip 6 (8GB/256GB) - Độc quyền online - Hàng chính hãng",
      price: "25.990.000đ",
      image:
        "https://salt.tikicdn.com/cache/280x280/ts/product/8a/50/a0/5df41f23fad1a30d0f753e533e2aa2cf.jpg.webp",
      rating: 4.5,
    },
  ];
  return (
    <Box
      sx={{
        mt: "16px",
        bgcolor: "#FFFFFF",
        borderRadius: "8px",
        padding: "16px",
      }}
    >
      <Grid container spacing={1}>
        {dataProds.map((item, index) => (
          <Grid
            key={index}
            item
            md={2}
            sx={{
              height: "390px",
              cursor: "pointer",
              border: "none",
            }}
          >
            <ProductItem
              image={item.image}
              name={item.name}
              price={item.price}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductList;
