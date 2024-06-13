import { Box, Grid, Typography } from "@mui/material"
import Singlecarproduct from "../../Home/ProductsSection/Singlecarproduct"



function Catsinglecard({data}) {
  return (
    <>
    <Grid item xs={4}>
      <Singlecarproduct productdata={data}/>
    </Grid>
    </>
)
}

export default Catsinglecard