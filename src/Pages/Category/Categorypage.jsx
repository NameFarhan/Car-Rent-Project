import { Box, Button, Grid, Typography } from "@mui/material";
import Appbar from "../../Shared/Appbar/Appbar";
import Catsidebar from "./Sidebarofcategorypage/Catsidebar";
import Filters from '../Home/FilterSection/Filters'
import Catcarlist from './Catcarlist/Catcarlist'
import Footer from '../../Shared/Footer/Footer'

function Categorypage() {
  return (
    <>
      <Appbar />

      <Grid container>
        <Catsidebar />
        <Grid item xs={9}>
            <Filters styles={{width:'486px',height:'136px',position:'relative',right:'20px',left:'118px',}} anotherstyles={{left:'5px',right:'16px'}}/>

            <Catcarlist/>
            <Box sx={{display:'flex',justifyContent:'flex-end',padding:'0 1.1vw 0 0'}}>
            <Box sx={{width:'586px',paddingTop:'64px',display:'flex',justifyContent:'space-between',alignItems:'center',paddingBottom:'64px',height:'44px'}}>
              <Button sx={{textTransform:'none',fontWeight:'500',fontSize:'16px'}} variant="contained">Show more car</Button>
              <Typography sx={{color:'#90A3BF',position:'relative',right:'7px',fontSize:'14px',fontWeight:'400'}}>120 Car</Typography>
            </Box>
            </Box>
        </Grid>
      </Grid>
      <Footer styles={{marginTop:'0'}}/>
    </>
  );
}

export default Categorypage;
