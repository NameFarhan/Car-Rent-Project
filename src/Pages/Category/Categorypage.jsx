import { Grid } from "@mui/material";
import Appbar from "../../Shared/Appbar/Appbar";
import Catsidebar from "./Sidebarofcategorypage/Catsidebar";
import Filters from '../Home/FilterSection/Filters'
import Catcarlist from './Catcarlist/Catcarlist'

function Categorypage() {
  return (
    <>
      <Appbar />

      <Grid container>
        <Catsidebar />
        <Grid item xs={9}>
            <Filters styles={{width:'486px',height:'136px',position:'relative',right:'20px',left:'118px',}} anotherstyles={{left:'5px',right:'16px'}}/>

            <Catcarlist/>
        </Grid>
      </Grid>
    </>
  );
}

export default Categorypage;
