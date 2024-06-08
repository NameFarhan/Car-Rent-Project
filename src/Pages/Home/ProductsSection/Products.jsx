import { Box, Typography } from "@mui/material";
import Carsproduct from "./Carsproduct";

function Products() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "4vh 0",
          paddingRight: "6.6vw",
          paddingLeft: "5.5vw",
        }}
      >
        <Typography
          sx={{ color: "#90A3BF", fontSize: "16px", fontWeight: "700" }}
        >
          Popular Car
        </Typography>
        <Typography
          sx={{ color: "#3563E9", fontSize: "16px", fontWeight: "700" }}
        >
          View All
        </Typography>
      </Box>

      <Carsproduct />
    </>
  );
}

export default Products;
