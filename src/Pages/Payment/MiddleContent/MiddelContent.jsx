import { Box, Button, Grid, Typography } from "@mui/material"
import car from '../PaymentPageImages/car.svg'
import Stars from '../../../Components/Stars' 
import radio from '../PaymentPageImages/radio.svg'
import arrow from '../PaymentPageImages/arrow.svg'
import visa from '../PaymentPageImages/Visa.svg'
import paypal from '../PaymentPageImages/paypal.svg'
import bitcoin from '../PaymentPageImages/bitcoin.svg'
import choose from '../PaymentPageImages/choose.svg'
import Checkbox from '../../../Components/Checkbox'
import sec from '../PaymentPageImages/sec.svg'
const MiddleContent = () => {
  return (
    <>

    <Box sx={{width:'100%',height:'100%',padding:'32px 32px'}}>
        <Grid container>
            <Grid item xs={8}>

                {/* step 1 of 4 */}
                <Box sx={{height:'336px',borderRadius:'10px',backgroundColor:'#fff',padding:'10px 24px 10px 24px',width:'852px'}} >
                    <Typography sx={{color:'#1A202C',marginBottom:'8px',fontSize:'20px',fontWeight:'700'}}>Billing Info</Typography>
                    <Box sx={{display:'flex',justifyContent:'space-between'}}>
                        <Typography sx={{color:'#90A3BF',fontSize:'14px',fontWeight:'500'}}>Please enter your billing info</Typography>
                        <Typography sx={{color:'#90A3BF',fontSize:'14px',fontWeight:'500'}}>Step 1 of 4</Typography>
                    </Box>
                    
                    <Box sx={{marginTop:'32px',display:'flex',alignItems:'center',gap:'10px'}}>
                        <Box sx={{dispay:'flex',flexDirection:'column'}}>
                            <Typography sx={{color:'#1A202C',fontSize:'16px',fontWeight:'600'}}>Name</Typography>
                            <Box sx={{marginTop:'16px',backgroundColor:'#F6F7F9',height:'56px',width:'386px',padding:'0 0 0 32px',display:'flex',borderRadius:'10px',alignItems:'center'}}>
                        <Typography sx={{color:'#90A3BF',fontSize:'14px',fontWeight:'500'}}>Your name</Typography>
                    </Box>
                        </Box>
                        {/* 2nd  */}

                        <Box sx={{dispay:'flex',flexDirection:'column',marginLeft:'16px'}}>
                            <Typography sx={{color:'#1A202C',fontSize:'16px',fontWeight:'600'}}>Phone Number</Typography>
                            <Box sx={{marginTop:'16px',backgroundColor:'#F6F7F9',height:'56px',width:'386px',padding:'0 0 0 32px',display:'flex',borderRadius:'10px',alignItems:'center'}}>
                        <Typography sx={{color:'#90A3BF',fontSize:'14px',fontWeight:'500'}}>Phone Number</Typography>
                    </Box>
                        </Box>


                    </Box>


                    {/* 2nd row */}

                    <Box sx={{display:'flex',marginTop:'24px',alignItems:'center',gap:'10px'}}>
                        <Box sx={{dispay:'flex',flexDirection:'column'}}>
                            <Typography sx={{color:'#1A202C',fontSize:'16px',fontWeight:'600'}}>Address</Typography>
                            <Box sx={{marginTop:'16px',backgroundColor:'#F6F7F9',height:'56px',width:'386px',padding:'0 0 0 32px',display:'flex',borderRadius:'10px',alignItems:'center'}}>
                        <Typography sx={{color:'#90A3BF',fontSize:'14px',fontWeight:'500'}}>Address</Typography>
                    </Box>
                        </Box>
                        {/* 2nd  */}

                        <Box sx={{dispay:'flex',flexDirection:'column',marginLeft:'16px'}}>
                            <Typography sx={{color:'#1A202C',fontSize:'16px',fontWeight:'600'}}>Town / City</Typography>
                            <Box sx={{marginTop:'16px',backgroundColor:'#F6F7F9',height:'56px',width:'386px',padding:'0 0 0 32px',display:'flex',borderRadius:'10px',alignItems:'center'}}>
                        <Typography sx={{color:'#90A3BF',fontSize:'14px',fontWeight:'500'}}>Town or city</Typography>
                    </Box>
                        </Box>


                    </Box>


                </Box>

                    {/* step 2 of 4 */}
                <Box sx={{backgroundColor:'#fff',marginTop:'32px',padding:'20px 24px 20px 24px',width:'852px',borderRadius:'10px'}}>
                <Typography sx={{color:'#1A202C',marginBottom:'8px',fontSize:'20px',fontWeight:'700'}}>Rental Info</Typography>
                    <Box sx={{display:'flex',justifyContent:'space-between'}}>
                        <Typography sx={{color:'#90A3BF',fontSize:'14px',fontWeight:'500'}}>Please select your rental date</Typography>
                        <Typography sx={{color:'#90A3BF',fontSize:'14px',fontWeight:'500'}}>Step 2 of 4</Typography>
                    </Box>


                    <Box sx={{marginTop:'32px',display:'flex',alignItems:'center'}}>
                        <Box component={"img"} alt="" src={radio}/>
                        <Typography sx={{fontWeight:'600',marginLeft:'10px',color:'#1A202C',fontSize:'16px'}}>Pick - Up</Typography>
                    </Box>

                    <Box sx={{marginTop:'24px'}}>
                    <Box sx={{display:'flex',marginTop:'24px',alignItems:'center',gap:'10px'}}>
                        <Box sx={{dispay:'flex',flexDirection:'column'}}>
                            <Typography sx={{color:'#1A202C',fontSize:'16px',fontWeight:'600'}}>Locations</Typography>
                            <Box sx={{marginTop:'16px',backgroundColor:'#F6F7F9',height:'56px',width:'386px',padding:'0 0 0 32px',display:'flex',borderRadius:'10px',alignItems:'center'}}>
                                <Box sx={{display:'flex',width:'100%',padding:'0 32px 0 0',justifyContent:'space-between'}}>
                        <Typography sx={{color:'#90A3BF',fontSize:'14px',fontWeight:'500'}}>Select your city</Typography>
                        <Box component={"img"} alt="" src={arrow}/>
                        </Box>
                    </Box>
                        </Box>
                        {/* 2nd  */}

                        <Box sx={{dispay:'flex',flexDirection:'column',marginLeft:'16px'}}>
                            <Typography sx={{color:'#1A202C',fontSize:'16px',fontWeight:'600'}}>Date</Typography>
                            <Box sx={{marginTop:'16px',backgroundColor:'#F6F7F9',height:'56px',width:'386px',padding:'0 0 0 32px',display:'flex',borderRadius:'10px',alignItems:'center'}}>
                            <Box sx={{display:'flex',width:'100%',padding:'0 32px 0 0',justifyContent:'space-between'}}>
                        <Typography sx={{color:'#90A3BF',fontSize:'14px',fontWeight:'500'}}>Select your Date</Typography>
                        <Box component={"img"} alt="" src={arrow}/>
                        </Box>
                    </Box>
                        </Box>
                    </Box>

                    {/* 2 of 4 Time  */}

                    <Box sx={{dispay:'flex',flexDirection:'column',marginTop:'24px'}}>
                            <Typography sx={{color:'#1A202C',fontSize:'16px',fontWeight:'600'}}>Time</Typography>
                            <Box sx={{marginTop:'16px',backgroundColor:'#F6F7F9',height:'56px',width:'386px',padding:'0 0 0 32px',display:'flex',borderRadius:'10px',alignItems:'center'}}>
                            <Box sx={{display:'flex',width:'100%',padding:'0 32px 0 0',justifyContent:'space-between'}}>
                        <Typography sx={{color:'#90A3BF',fontSize:'14px',fontWeight:'500'}}>Select your Time</Typography>
                        <Box component={"img"} alt="" src={arrow}/>
                        </Box>
                    </Box>
                        </Box>
                    
                    </Box>

                    {/* 2nd Drop off */}

                    <Box sx={{marginTop:'32px',display:'flex',alignItems:'center'}}>
                        <Box component={"img"} alt="" src={radio}/>
                        <Typography sx={{fontWeight:'600',marginLeft:'10px',color:'#1A202C',fontSize:'16px'}}>Drop - Off</Typography>
                    </Box>

                    <Box sx={{marginTop:'24px'}}>
                    <Box sx={{display:'flex',marginTop:'24px',alignItems:'center',gap:'10px'}}>
                        <Box sx={{dispay:'flex',flexDirection:'column'}}>
                            <Typography sx={{color:'#1A202C',fontSize:'16px',fontWeight:'600'}}>Locations</Typography>
                            <Box sx={{marginTop:'16px',backgroundColor:'#F6F7F9',height:'56px',width:'386px',padding:'0 0 0 32px',display:'flex',borderRadius:'10px',alignItems:'center'}}>
                                <Box sx={{display:'flex',width:'100%',padding:'0 32px 0 0',justifyContent:'space-between'}}>
                        <Typography sx={{color:'#90A3BF',fontSize:'14px',fontWeight:'500'}}>Select your city</Typography>
                        <Box component={"img"} alt="" src={arrow}/>
                        </Box>
                    </Box>
                        </Box>
                        {/* 2nd  */}

                        <Box sx={{dispay:'flex',flexDirection:'column',marginLeft:'16px'}}>
                            <Typography sx={{color:'#1A202C',fontSize:'16px',fontWeight:'600'}}>Date</Typography>
                            <Box sx={{marginTop:'16px',backgroundColor:'#F6F7F9',height:'56px',width:'386px',padding:'0 0 0 32px',display:'flex',borderRadius:'10px',alignItems:'center'}}>
                            <Box sx={{display:'flex',width:'100%',padding:'0 32px 0 0',justifyContent:'space-between'}}>
                        <Typography sx={{color:'#90A3BF',fontSize:'14px',fontWeight:'500'}}>Select your Date</Typography>
                        <Box component={"img"} alt="" src={arrow}/>
                        </Box>
                    </Box>
                        </Box>
                    </Box>

                    {/* 2 of 4 Time  */}

                    <Box sx={{dispay:'flex',flexDirection:'column',marginTop:'24px'}}>
                            <Typography sx={{color:'#1A202C',fontSize:'16px',fontWeight:'600'}}>Time</Typography>
                            <Box sx={{marginTop:'16px',backgroundColor:'#F6F7F9',height:'56px',width:'386px',padding:'0 0 0 32px',display:'flex',borderRadius:'10px',alignItems:'center'}}>
                            <Box sx={{display:'flex',width:'100%',padding:'0 32px 0 0',justifyContent:'space-between'}}>
                        <Typography sx={{color:'#90A3BF',fontSize:'14px',fontWeight:'500'}}>Select your Time</Typography>
                        <Box component={"img"} alt="" src={arrow}/>
                        </Box>
                    </Box>
                        </Box>
                    
                    </Box>

                </Box>

                {/* Step 3 of 4 */}



                <Box sx={{backgroundColor:'#fff',marginTop:'32px',padding:'20px 24px 20px 24px',width:'852px',borderRadius:'10px'}}>
                    <Typography sx={{color:'#1A202C',marginBottom:'8px',fontSize:'20px',fontWeight:'700'}}>Payment Method</Typography>
                    <Box sx={{display:'flex',justifyContent:'space-between'}}>
                        <Typography sx={{color:'#90A3BF',fontSize:'14px',fontWeight:'500'}}>Please enter your payment method</Typography>
                        <Typography sx={{color:'#90A3BF',fontSize:'14px',fontWeight:'500'}}>Step 3 of 4</Typography>
                    </Box>



                    <Box sx={{marginTop:'32px',height:'308px',backgroundColor:'#F6F7F9',borderRadius:'10px',padding:'20px 24px'}}>
                        <Box sx={{display:'flex',justifyContent:'space-between'}}>
                        <Box sx={{display:'flex',alignItems:'center'}}>
                        <Box component={"img"} alt="" src={radio}/>
                        <Typography sx={{fontWeight:'600',marginLeft:'10px',color:'#1A202C',fontSize:'16px'}}>Credit Card</Typography>
                    </Box>
                    <Box component={"img"} alt="" src={visa}/>
                        </Box>

                        <Box sx={{marginTop:'32px',display:'flex',alignItems:'center',gap:'10px'}}>
                        <Box sx={{dispay:'flex',flexDirection:'column'}}>
                            <Typography sx={{color:'#1A202C',fontSize:'16px',fontWeight:'600'}}>Card Number</Typography>
                            <Box sx={{marginTop:'16px',backgroundColor:'#fff',height:'56px',width:'362px',padding:'0 0 0 32px',display:'flex',borderRadius:'10px',alignItems:'center'}}>
                        <Typography sx={{color:'#90A3BF',fontSize:'14px',fontWeight:'500'}}>Card number</Typography>
                    </Box>
                        </Box>
                        {/* 2nd  */}

                        <Box sx={{dispay:'flex',flexDirection:'column',marginLeft:'15px'}}>
                            <Typography sx={{color:'#1A202C',fontSize:'16px',fontWeight:'600'}}>Expration Date</Typography>
                            <Box sx={{marginTop:'16px',backgroundColor:'#fff',height:'56px',width:'362px',padding:'0 0 0 32px',display:'flex',borderRadius:'10px',alignItems:'center'}}>
                        <Typography sx={{color:'#90A3BF',fontSize:'14px',fontWeight:'500'}}>DD / MM / YY</Typography>
                    </Box>
                        </Box>


                    </Box>

                    {/* 2nd row of step 3 of 4 */}

                    <Box sx={{marginTop:'24px',display:'flex',alignItems:'center',gap:'10px'}}>
                        <Box sx={{dispay:'flex',flexDirection:'column',}}>
                            <Typography sx={{color:'#1A202C',fontSize:'16px',fontWeight:'600'}}>Card Holder</Typography>
                            <Box sx={{marginTop:'16px',backgroundColor:'#fff',height:'56px',width:'362px',padding:'0 0 0 32px',display:'flex',borderRadius:'10px',alignItems:'center'}}>
                        <Typography sx={{color:'#90A3BF',fontSize:'14px',fontWeight:'500'}}>Card holder</Typography>
                    </Box>
                        </Box>
                        {/* 2nd  */}

                        <Box sx={{dispay:'flex',flexDirection:'column',marginLeft:'15px'}}>
                            <Typography sx={{color:'#1A202C',fontSize:'16px',fontWeight:'600'}}>CVC</Typography>
                            <Box sx={{marginTop:'16px',backgroundColor:'#fff',height:'56px',width:'362px',padding:'0 0 0 32px',display:'flex',borderRadius:'10px',alignItems:'center'}}>
                        <Typography sx={{color:'#90A3BF',fontSize:'14px',fontWeight:'500'}}>CVC</Typography>
                    </Box>
                        </Box>


                    </Box>

                    </Box>






                    <Box sx={{marginTop:'24px',padding:'0 24px',borderRadius:'10px',backgroundColor:'#F6F7F9',height:'56px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                        <Box sx={{display:'flex',width:'max-content'}}>
                            <Box component={"img"} alt="" src={choose}/>
                            <Typography sx={{fontWeight:'600',marginLeft:'20px',fontSize:'16px',color:'#1A202C'}}>Paypal</Typography>
                        </Box>

                        <Box component={"img"} alt="" src={paypal}/>
                    </Box>

                    {/* BITCOIN BOX */}

                    <Box sx={{marginTop:'24px',padding:'0 24px',borderRadius:'10px',backgroundColor:'#F6F7F9',height:'56px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                    <Box sx={{display:'flex',width:'max-content'}}>
                            <Box component={"img"} alt="" src={choose}/>
                            <Typography sx={{fontWeight:'600',marginLeft:'20px',fontSize:'16px',color:'#1A202C'}}>Bitcoin</Typography>
                        </Box>

                        <Box component={"img"} alt="" src={bitcoin}/>
                    </Box>
                </Box>


                {/* step 4 of 4 */}


                <Box sx={{backgroundColor:'#fff',marginTop:'32px',padding:'20px 24px 20px 24px',width:'852px',borderRadius:'10px'}}>
                <Typography sx={{color:'#1A202C',marginBottom:'8px',fontSize:'20px',fontWeight:'700'}}>Confirmation</Typography>
                    <Box sx={{display:'flex',justifyContent:'space-between'}}>
                        <Typography sx={{color:'#90A3BF',fontSize:'14px',fontWeight:'500'}}>We are getting to the end. Just few clicks and your rental is ready!</Typography>
                        <Typography sx={{color:'#90A3BF',fontSize:'14px',fontWeight:'500'}}>Step 4 of 4</Typography>
                    </Box>

                    <Box sx={{marginTop:'32px'}}>
                    <Box sx={{marginTop:'24px',padding:'0 24px',borderRadius:'10px',backgroundColor:'#F6F7F9',height:'56px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                    <Box sx={{display:'flex',width:'max-content'}}>
                        <Checkbox/>
                            <Typography sx={{fontWeight:'600',marginLeft:'20px',fontSize:'16px',color:'#1A202C'}}>I agree with sending an Marketing and newsletter emails. No spam, promissed!</Typography>
                        </Box>

                    </Box>
                    </Box>

                    <Box sx={{marginTop:'24px'}}>
                    <Box sx={{marginTop:'24px',padding:'0 24px',borderRadius:'10px',backgroundColor:'#F6F7F9',height:'56px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                    <Box sx={{display:'flex',width:'max-content'}}>
                        <Checkbox/>
                            <Typography sx={{fontWeight:'600',marginLeft:'20px',fontSize:'16px',color:'#1A202C'}}>I agree with our terms and conditions and privacy policy.</Typography>
                        </Box>

                    </Box>
                    </Box>

                    <Box sx={{marginTop:'32px'}}>
                            <Button sx={{width:'140px',height:'56px',fontSize:'16px',fontWeight:'700',textTransform:'none',borderRadius:'10px',color:'#FFFFFF'}} variant="contained">Rent Now</Button>
                    </Box>
                    <Box sx={{marginTop:'32px',marginBottom:'16px'}} component={"img"} alt="" src={sec}/>
                    <Typography sx={{color:'#1A202C',fontSize:'16px',fontWeight:'600',marginBottom:'8px'}}>All your data are safe</Typography>
                    <Typography sx={{color:'#90A3BF',fontSize:'14px',fontWeight:'500'}}>We are using the most advanced security to provide you the best experience ever.</Typography>
                </Box>
            </Grid>




            <Grid item xs={4}>
                <Box sx={{backgroundColor:'#fff',height:'560px',borderRadius:'10px',padding:'16px 24px 24px 24px',marginRight:'10px',position:'relative',right:'20px'}}>
                    <Typography sx={{color:'#1A202C',marginBottom:'4px',fontSize:'20px',fontWeight:'700'}}>Rental Summary</Typography>
                    <Typography sx={{color:'#90A3BF',fontSize:'14px',fontWeight:'500'}}>Prices may change depending on the length of the rental and the price of your rental car.</Typography>


                    <Box sx={{marginTop:'32px'}}>
                        {/* imagebox */}
                        <Box sx={{display:'flex',alignItems:'center'}}>
                        <Box sx={{width:'132px',marginRight:'15px',padding:'5px',height:'108px',borderRadius:'10px',backgroundColor:'#3563E9',display:'flex',justifyContent:'center',alignItems:'center'}}>
                            <Box sx={{width:'100%',height:'100%'}} component={"img"} alt="" src={car}></Box>
                        </Box>
                        <Typography sx={{color:'#1A202C',fontSize:'32px',fontWeight:'700'}}>Nissan GT - R</Typography>
                        </Box>
                        {/* end image box */}
                        <Box sx={{display:'flex',position:'relative',left:'147px',gap:'10px',bottom:'30px',alignItems:'center',width:'max-content',}}>
                                <Stars/>
                                <Typography sx={{color:'#596780',fontSize:'14px',fontWeight:'500'}}>440+ Reviewer</Typography>

                        </Box>
                    </Box>

                    <Box sx={{marginTop:'22px'}}>
                        <Box sx={{maxWidth:'444px',height:'.5px',margin:'auto',borderTop:'1px solid #C3D4E9'}} component={"hr"}></Box>
                    </Box>

                    <Box sx={{marginTop:'32px',display:'flex',justifyContent:'space-between'}}>
                        <Typography sx={{color:'#90A3BF',fontSize:'16px',fontWeight:'500'}}>Subtotal</Typography>
                        <Typography sx={{color:'#1A202C',fontSize:'16px',fontWeight:'600'}}>$80.00</Typography>
                    </Box>

                    <Box sx={{marginTop:'24px',display:'flex',justifyContent:'space-between'}}>
                        <Typography sx={{color:'#90A3BF',fontSize:'16px',fontWeight:'500'}}>Tax</Typography>
                        <Typography sx={{color:'#1A202C',fontSize:'16px',fontWeight:'600'}}>$0</Typography>
                    </Box>

                    <Box sx={{marginTop:'32px',backgroundColor:'#F6F7F9',padding:'0 32px',height:'56px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                        <Typography sx={{color:'#90A3BF',fontSize:'14px',fontWeight:'500'}}>Apply promo code</Typography>
                        <Typography sx={{color:'#1A202C',fontSize:'16px',fontWeight:'600'}}>Apply now</Typography>
                    </Box>

                    <Box sx={{display:'flex',marginTop:'22px',justifyContent:'space-between',alignItems:'center'}}>
                        <Box sx={{display:'flex',flexDirection:'column'}}>
                        <Typography sx={{color:'#1A202C',fontWeight:'700',fontSize:'20px'}}>Total Rental Price</Typography>
                        <Typography sx={{color:'#90A3BF',fontWeight:'500',fontSize:'14px'}}>Overall price and includes rental discount</Typography>
                        </Box>

                        <Typography sx={{color:'#1A202C',fontWeight:'700',fontSize:'32px'}}>$80.00</Typography>
                    </Box>
                </Box>

            </Grid>

        </Grid>
    </Box>
    </>
  )
}

export default MiddleContent