import React from "react";
import { Box, Typography, Grid } from "@mui/material"
import radio from './Filterimages/radio.svg'



function Filters() {
  return (

    <>
    
    <Box sx={{paddingRight:'4.7vw',paddingLeft:'4vw',paddingTop:'2vh'}}>
        <Grid container spacing={0}>
            <Grid item xs={5}>
                <Box sx={{height:'136px',borderRadius:'10px',backgroundColor:'#fff',border:'1px solid green'}}>
                    <Box sx={{display:'flex',}}>

                <Box
  component="img"
  sx={{
  height: 20,
  width: 20,
  }}
  alt="Radio"
  src={radio    }
  />
  <Typography sx={{marginLeft:'10px'}}>
  Pick - Up
  </Typography>
                </Box>
                </Box>

            </Grid>


            <Grid sx={{border:'2px solid orange'}} item xs={2}>
                <Box sx={{border:'1px solid orange',height:'100%',width:'100%'}}>
2
                </Box>
            </Grid>


            <Grid item xs={5}>
                <Box sx={{border:'1px solid orange',height:'136px',borderRadius:'10px',backgroundColor:'#fff'}}>
3
                </Box>
            </Grid>
        </Grid>
    </Box>


    </>

  )
}

export default Filters