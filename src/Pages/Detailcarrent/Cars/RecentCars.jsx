import { Grid } from "@mui/material";
import Singlecarproduct from "../../Home/ProductsSection/Singlecarproduct";

const RecentCars = ({data}) => {

  return(
    <>
        <Grid item xs={4}>
          <Singlecarproduct productdata={data} styles={{width:'317px'}}/>
          </Grid>
    </>
  ) 


};

export default RecentCars;
