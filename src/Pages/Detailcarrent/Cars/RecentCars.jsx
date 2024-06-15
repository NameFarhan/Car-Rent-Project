import { Grid } from "@mui/material";
import Singlecarproduct from "../../Home/ProductsSection/Singlecarproduct";

const RecentCars = ({data}) => {

  return(
    <>
        <Grid item xs={4}>
        <Singlecarproduct styles={{width:'317px'}} productdata={data}/>
        </Grid>
    </>
  ) 


};

export default RecentCars;
