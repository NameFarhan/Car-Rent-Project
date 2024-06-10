import { Box, Grid, Stack, Typography } from "@mui/material";
import Appbar from "../../Shared/Appbar/Appbar";
import Footer from "../../Shared/Footer/Footer";
import Checkbox from '@mui/material/Checkbox';
import Slider from '../../Components/Slider'

import Range from '../../Components/Range'

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


function Categorypage() {
  return (
    <>
      <Appbar />

      <Grid container>
        <Grid item xs={3}>
            <Box sx={{width:'100%',height:'100%',backgroundColor:'#fff',padding:'32px 0 0 32px'}}>
                <Typography sx={{color:'#90A3BF',fontSize:'12px',fontWeight:'600',marginBottom:'28px',letterSpacing:'4px',marginLeft:'3px'}}>TYPE</Typography>

                <Stack>

                <Box sx={{display:'flex',alignItems:'center',}}>
                <Checkbox sx={{width:'20px',height:'20px'}} {...label} defaultChecked/>
                <Typography sx={{fontSize:'20px',marginLeft:'8px',fontWeight:'600',color:'#90A3BF'}}><Typography sx={{color:'#596780',display:'inline-block'}}>Sport</Typography>  (10)</Typography>
                </Box>

                <Box sx={{display:'flex',alignItems:'center',marginTop:'32px'}}>
                <Checkbox sx={{width:'20px',height:'20px'}} {...label} defaultChecked/>
                <Typography sx={{fontSize:'20px',marginLeft:'8px',fontWeight:'600',color:'#90A3BF'}}><Typography sx={{color:'#596780',display:'inline-block'}}>SUV</Typography>  (12)</Typography>
                </Box>

                <Box sx={{display:'flex',alignItems:'center',marginTop:'32px'}}>
                <Checkbox sx={{width:'20px',height:'20px'}} {...label}                      />
                <Typography sx={{fontSize:'20px',marginLeft:'8px',fontWeight:'600',color:'#90A3BF'}}><Typography sx={{color:'#596780',display:'inline-block'}}>MPV</Typography>  (16)</Typography>
                </Box>

                <Box sx={{display:'flex',alignItems:'center',marginTop:'32px'}}>
                <Checkbox sx={{width:'20px',height:'20px'}} {...label}                      />
                <Typography sx={{fontSize:'20px',marginLeft:'8px',fontWeight:'600',color:'#90A3BF'}}><Typography sx={{color:'#596780',display:'inline-block'}}>SEDAN</Typography>  (20)</Typography>
                </Box>

                <Box sx={{display:'flex',alignItems:'center',marginTop:'32px'}}>
                <Checkbox sx={{width:'20px',height:'20px'}} {...label}                      />
                <Typography sx={{fontSize:'20px',marginLeft:'8px',fontWeight:'600',color:'#90A3BF'}}><Typography sx={{color:'#596780',display:'inline-block'}}>Coupe</Typography>  (14)</Typography>
                </Box>

                <Box sx={{display:'flex',alignItems:'center',marginTop:'32px'}}>
                <Checkbox sx={{width:'20px',height:'20px'}} {...label}                      />
                <Typography sx={{fontSize:'20px',marginLeft:'8px',fontWeight:'600',color:'#90A3BF'}}><Typography sx={{color:'#596780',display:'inline-block'}}>Hatchback</Typography>  (14)</Typography>
                </Box>
                </Stack>






                <Box sx={{marginTop:'56px'}}>
                <Typography sx={{color:'#90A3BF',fontSize:'12px',fontWeight:'600',marginBottom:'30px',letterSpacing:'4px',marginLeft:'3px'}}>CAPACITY</Typography>

                <Stack>
                <Box sx={{display:'flex',alignItems:'center',}}>
                <Checkbox sx={{width:'20px',height:'20px'}} {...label} defaultChecked/>
                <Typography sx={{fontSize:'20px',marginLeft:'8px',fontWeight:'600',color:'#90A3BF'}}><Typography sx={{color:'#596780',display:'inline-block'}}>2 Person</Typography>  (10)</Typography>
                </Box>

                <Box sx={{display:'flex',alignItems:'center',marginTop:'32px'}}>
                <Checkbox sx={{width:'20px',height:'20px'}} {...label}                      />
                <Typography sx={{fontSize:'20px',marginLeft:'8px',fontWeight:'600',color:'#90A3BF'}}><Typography sx={{color:'#596780',display:'inline-block'}}>4 Person</Typography>  (14)</Typography>
                </Box>

                <Box sx={{display:'flex',alignItems:'center',marginTop:'32px'}}>
                <Checkbox sx={{width:'20px',height:'20px'}} {...label}                      />
                <Typography sx={{fontSize:'20px',marginLeft:'8px',fontWeight:'600',color:'#90A3BF'}}><Typography sx={{color:'#596780',display:'inline-block'}}>6 person</Typography>  (12)</Typography>
                </Box>

                <Box sx={{display:'flex',alignItems:'center',marginTop:'32px'}}>
                <Checkbox sx={{width:'20px',height:'20px'}} {...label} defaultChecked />
                <Typography sx={{fontSize:'20px',marginLeft:'8px',fontWeight:'600',color:'#90A3BF'}}><Typography sx={{color:'#596780',display:'inline-block'}}>8 or More</Typography>  (16)</Typography>
                </Box>
                </Stack>

                </Box>

                <Box sx={{marginTop:'55px'}}>
                <Typography sx={{color:'#90A3BF',fontSize:'12px',fontWeight:'600',marginBottom:'28px',letterSpacing:'4px',marginLeft:'3px'}}>PRICE</Typography>
                <Stack>
                    <Slider/>

                    <Typography sx={{color:'#596780',fontSize:'20px',fontWeight:'600',marginTop:'12px'}}>Max. $100.00</Typography>
                </Stack>
                </Box>
            </Box>

        </Grid>



        <Grid item xs={9} sx={{border:'1px solid black',padding:'10px 10px'}}></Grid>
      </Grid>
    </>
  );
}

export default Categorypage;
