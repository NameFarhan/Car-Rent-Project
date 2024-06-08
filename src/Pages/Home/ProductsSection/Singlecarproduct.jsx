import { Box, Grid, Typography } from "@mui/material";

function Singlecarproduct({ productdata }) {
  return (
    <>
     
          <Grid item xs={3}>
            <Box sx={{padding:'3.5vh 1.4vw',width:'100%',height:'388px',borderRadius:'10px',backgroundColor:'#fff'}}>                
                <Box sx={{display:'flex',flexDirection:'column'}}>
                    <Typography sx={{color:'#1A202C',fontSize:'20px',fontWeight:'700'}}>{productdata.carname}</Typography>
                    <Typography sx={{color:'#90A3BF',fontSize:'14px',fontWeight:'700'}}>{productdata.carcategory}</Typography>
                    <Box
  component="img"
  sx={{
  height: 80,
  marginTop:'35%',
  width: 240,

  }}
  alt="Cars"
  src={productdata.carimage}
  />
                </Box>

                <Box sx={{display:'flex',gap:'10px'}}>
                    
                </Box>
            </Box>
          </Grid>
      
    </>
  );
}

export default Singlecarproduct;
