import React from "react";
import { Box, Typography, Grid, Divider } from "@mui/material";
import radio from "./Filterimages/radio.svg";
import arrow from './Filterimages/arrow-down-filters.svg'
import line from './Filterimages/line.png'
import swap from './Filterimages/swap.svg'

function Filters() {
  return (
    <>
      <Box
        sx={{ paddingRight: "4.7vw", paddingLeft: "4vw", paddingTop: "2vh" }}
      >
        <Grid container spacing={0}>
          <Grid  item xs={5}>
            <Box sx={{width:'582px',height:'136px',paddingTop:'.6vh',borderRadius:'10px',backgroundColor:'#fff',paddingLeft:'6vh'}}>
              <Box sx={{display:'flex',alignItems:'center',marginTop:'3vh'}}>
              <Box
  component="img"
  sx={{
  height: 16,
  width: 16,
  marginRight:'9px',
  position:'relative',
  bottom:'1px'
  }}
  alt="."
  src={radio}
  />
  <Typography sx={{fontWeight:'500',fontSize:'16px'}}>Pick - Up</Typography>
              </Box>


              <Box sx={{width:'486px',height:'48px',display:'flex',padding:'2vh 0'}}>
                <Box sx={{width:'126px',height:'48px'}}>
                  <Typography sx={{fontWeight:'600',fontSize:'16px',color:'#1A202C',marginBottom:'5px'}}>Locations</Typography>
                  <Box sx={{display:'flex',alignItems:'center'}}>
                    <Typography sx={{color:'#90A3BF',fontSize:'12px'}}>Select your City</Typography>
                    <Box
  component="img"
  sx={{
  height: 14,
  width: 14,
  position:'relative',
  left:'20px',
  marginRight:'9px'
  }}
  alt="."
  src={arrow}
  />
                  </Box>
                </Box>
                {/* Line */}
                <Box
  component="img"
  sx={{
  height: 47,
  marginLeft:'30px',
  position:'relative',
  right:'17px',
  width: 2,
  }}
  alt="."
  src={line}
  />
                <Box sx={{width:'134px',height:'48px',justifyContent:'center',alignItems:'center'}}>
                <Typography sx={{fontWeight:'600',fontSize:'16px',color:'#1A202C',marginBottom:'5px'}}>Date</Typography>
                  <Box sx={{display:'flex',alignItems:'center'}}>
                    <Typography sx={{color:'#90A3BF',fontSize:'12px'}}>Select your Date</Typography>
                    <Box
  component="img"
  sx={{
  height: 14,
  width: 14,
  marginLeft:'20px',
  marginRight:'9px'
  }}
  alt="."
  src={arrow}
  />
                  </Box>
                </Box>

                <Box



// line


  component="img"
  sx={{
  height: 47,
  width: 2,
  marginLeft:'30px',
  position:'relative',
  right:'17px'
  }}
  alt="."
  src={line}
  />


                <Box sx={{width:'130px',height:'48px'}}>
                <Typography sx={{fontWeight:'600',fontSize:'16px',color:'#1A202C',marginBottom:'5px'}}>Time</Typography>
                  <Box sx={{display:'flex',alignItems:'center'}}>
                    <Typography sx={{color:'#90A3BF',fontSize:'12px'}}>Select your Time</Typography>
                    <Box
  component="img"
  sx={{
  height: 14,
  width: 14,
  position:'relative',
  left:'20px',
  marginRight:'9px'
  }}
  alt="."
  src={arrow}
  />
                  </Box>
                </Box>
              </Box>

            </Box>
          </Grid>







          <Grid item xs={2}>
            <Box
              sx={{display:'flex',alignItems:'center',justifyContent:'center', height: "100%", width: "100%" }}
            >
              <Box sx={{width:'60px',height:'60px',border:'1px solid pink',backgroundColor:'#3563E9',borderRadius:'10px',display:'flex',alignItems:'center',justifyContent:'center'}}>
              <Box
  component="img"
  sx={{
  height: 24,
  width: 24,
  }}
  alt=""
  src={swap}
  />
              </Box>
            </Box>
          </Grid>






          <Grid item xs={5}>
          <Box sx={{width:'582px',position:'relative',right:'37px',height:'136px',paddingTop:'.6vh',borderRadius:'10px',backgroundColor:'#fff',paddingLeft:'6vh'}}>
              <Box sx={{display:'flex',alignItems:'center',marginTop:'3vh'}}>
              <Box
  component="img"
  sx={{
  height: 16,
  width: 16,
  marginRight:'9px',
  position:'relative',
  bottom:'1px'
  }}
  alt="."
  src={radio}
  />
  <Typography sx={{fontWeight:'500',fontSize:'16px',color:'#1A202C'}}>Drop - Off</Typography>
              </Box>


              <Box sx={{width:'486px',height:'48px',display:'flex',padding:'2vh 0'}}>
                <Box sx={{width:'126px',height:'48px'}}>
                  <Typography sx={{fontWeight:'600',fontSize:'16px',color:'#1A202C',marginBottom:'5px'}}>Locations</Typography>
                  <Box sx={{display:'flex',alignItems:'center'}}>
                    <Typography sx={{color:'#90A3BF',fontSize:'12px'}}>Select your City</Typography>
                    <Box
  component="img"
  sx={{
  height: 14,
  width: 14,
  position:'relative',
  left:'20px',
  marginRight:'9px'
  }}
  alt="."
  src={arrow}
  />
                  </Box>
                </Box>
                {/* Line */}
                <Box
  component="img"
  sx={{
  height: 47,
  marginLeft:'30px',
  position:'relative',
  right:'17px',
  width: 2,
  }}
  alt="."
  src={line}
  />
                <Box sx={{width:'134px',height:'48px',justifyContent:'center',alignItems:'center'}}>
                <Typography sx={{fontWeight:'600',fontSize:'16px',color:'#1A202C',marginBottom:'5px'}}>Date</Typography>
                  <Box sx={{display:'flex',alignItems:'center'}}>
                    <Typography sx={{color:'#90A3BF',fontSize:'12px'}}>Select your Date</Typography>
                    <Box
  component="img"
  sx={{
  height: 14,
  width: 14,
  marginLeft:'20px',
  marginRight:'9px'
  }}
  alt="."
  src={arrow}
  />
                  </Box>
                </Box>

                <Box



// line


  component="img"
  sx={{
  height: 47,
  width: 2,
  marginLeft:'30px',
  position:'relative',
  right:'17px'
  }}
  alt="."
  src={line}
  />


                <Box sx={{width:'130px',height:'48px'}}>
                <Typography sx={{fontWeight:'600',fontSize:'16px',color:'#1A202C',marginBottom:'5px'}}>Time</Typography>
                  <Box sx={{display:'flex',alignItems:'center'}}>
                    <Typography sx={{color:'#90A3BF',fontSize:'12px'}}>Select your Time</Typography>
                    <Box
  component="img"
  sx={{
  height: 14,
  width: 14,
  position:'relative',
  left:'20px',
  marginRight:'9px'
  }}
  alt="."
  src={arrow}
  />
                  </Box>
                </Box>
              </Box>

            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Filters;
