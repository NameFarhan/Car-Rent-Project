import review1 from './ReviewImages/review1.svg'
import review2 from './ReviewImages/review2.svg'
import { Box, Button, Typography } from '@mui/material'
import Stars from '../../../Components/Stars'
import arrow from './ReviewImages/arrow.svg'

const Reviews = () => {
  return (
    <>
    <Box sx={{padding:'0px 32px 32px 32px'}}>
    <Box sx={{height:'482px',width:'100%',borderRadius:'10px',backgroundColor:'#fff'}}>
            <Box sx={{display:'flex',alignItems:'center',padding:'32px 0 0 32px'}}>
                <Typography sx={{color:'#1A202C',fontWeight:'600',fontSize:'20px'}}>Reviews</Typography>
                <Button sx={{width:'44px',height:'28px',fontSize:'14px',fontWeight:'700',marginLeft:'12px'}} variant='contained'>13</Button>
            </Box>




            <Box sx={{marginTop:'0',display:'flex',alignItems:'center',marginLeft:'14px',paddingLeft:'10px',marginRight:'24px',}}>
                <Box component={"img"} alt="" src={review1} sx={{width:'56px',height:'56px'}}/>
                <Box sx={{marginLeft:'14px',position:'relative',top:'40px'}}>
                <Box sx={{display:'flex',justifyContent:'space-between'}}>
                    <Typography sx={{color:'#1A202C',marginBottom:'8px',fontSize:'20px',fontWeight:'700'}}>Alex Stanton</Typography>
                    <Typography sx={{color:'#90A3BF',fontSize:'14px',fontWeight:'500'}}>21 July 2022</Typography>
                </Box>
                
                <Box sx={{display:'flex',justifyContent:'space-between'}}>
                    <Typography  sx={{color:'#90A3BF',fontSize:'14px',fontWeight:'500'}}>CEO at Bukalapak</Typography>
                    <Stars/>
                </Box>

                <Box sx={{marginTop:'12px'}}>
                    <Typography sx={{color:'#596780',letterSpacing:'-2%',lineHeight:'200%',fontSize:'14px',fontWeight:'500'}}>We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.</Typography>
                </Box>
                </Box>
            </Box>

            {/* 2nd rview */}

            <Box sx={{marginTop:'32px',display:'flex',alignItems:'center',marginLeft:'14px',paddingLeft:'10px',marginRight:'24px',}}>
                <Box component={"img"} alt="" src={review2} sx={{width:'56px',height:'56px'}}/>
                <Box sx={{marginLeft:'14px',position:'relative',top:'40px'}}>
                <Box sx={{display:'flex',justifyContent:'space-between'}}>
                    <Typography sx={{color:'#1A202C',marginBottom:'8px',fontSize:'20px',fontWeight:'700'}}>Skylar Dias</Typography>
                    <Typography sx={{color:'#90A3BF',fontSize:'14px',fontWeight:'500'}}>20 July 2022</Typography>
                </Box>
                
                <Box sx={{display:'flex',justifyContent:'space-between'}}>
                    <Typography  sx={{color:'#90A3BF',fontSize:'14px',fontWeight:'500'}}>CEO at Amazon</Typography>
                    <Stars/>
                </Box>

                <Box sx={{marginTop:'12px'}}>
                    <Typography sx={{color:'#596780',letterSpacing:'-2%',lineHeight:'200%',fontSize:'14px',fontWeight:'500'}}>We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.</Typography>
                </Box>
                </Box>
            </Box>

            <Box sx={{position:'relative',marginTop:'10px',top:'70px',display:'flex',justifyContent:'center',alignItems:'center'}}>
                <Typography sx={{color:'#90A3BF',fontweight:'600',fontSize:'16px'}}>Show All</Typography>
                <Box sx={{marginLeft:'10px',}} component={"img"} alt="" src={arrow}/>
            </Box>

    </Box>
    </Box>
    </>
  )
}

export default Reviews