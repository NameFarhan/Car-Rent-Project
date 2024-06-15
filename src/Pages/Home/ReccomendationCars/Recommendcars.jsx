import { Box, Typography } from "@mui/material"
import Productcars from "./Productcars"

function  Recommendcars() {
  return (
    <>
    <Box sx={{display:'flex',padding:'4vh 4vh 0 5.5vw'}}>
      <Typography sx={{fontSize:'16px',color:'#90A3BF',fontWeight:'600'}}>Recomendation Car</Typography>
    </Box>
    <Productcars/>

    <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',padding:'2vh 0vw',marginBottom:'30px'}}>
    <Box sx={{display:'flex',position:'relative',left:'25px',backgroundColor:'#3563E9',justifyContent:'center',alignItems:'center',width:'156px',height:'44px',borderRadius:'4px',color:'#fff'}}>
    Show more car
    </Box>

<Box sx={{position:'relative',left:'38.5%'}}>
    <Typography sx={{color:'#90A3BF',fontSize:'14px',}}>120 Car</Typography>
    </Box>
    </Box>
    </>
)
}

export default Recommendcars