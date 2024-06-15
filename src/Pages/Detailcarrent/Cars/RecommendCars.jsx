

import { Grid } from "@mui/material"
import Singlecarproduct from "../../Home/ProductsSection/Singlecarproduct"

const RecommendCars = ({data}) => {
  return (
    <>
      <Grid item xs={4}>
          <Singlecarproduct productdata={data} styles={{width:'317px'}}/>
          </Grid>
    </>
  )
}

export default RecommendCars