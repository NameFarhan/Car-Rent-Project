import { Box, Grid } from '@mui/material'
import carimage1 from './Productsimages/carimage1.svg'
import carimage2 from './Productsimages/carimage2.svg'
import carimage3 from './Productsimages/carimage3.svg'
import carimage4 from './Productsimages/carimage4.svg'
import Singlecarproduct from './Singlecarproduct'
import heart from './Productsimages/heart.svg'

import icon1 from './Productsimages/gas-station.svg'
import icon2 from './Productsimages/Car.svg'
import icon3 from './Productsimages/profile.svg'





const Carsdata = [
    {
        carname:'Koenigsegg',
        carcategory:'Sport',
        carimage: carimage1,
        fuel:'90L',
        fuelicon: icon1,
        circle: icon2,
        buyerpeopleicon: icon3,
        buyerpeople:'2 People',
        price:'$99.00/',
        dil: heart
    },


    {
        carname:'Nissan GT - R',
        carcategory:'Sport',
        carimage: carimage2,
        fuel:'80L',
        fuelicon: icon1,
        circle: icon2,
        buyerpeopleicon: icon3,
        buyerpeople:'2 People',
        price:'$80.00/',
        discountprice:'$100.00'
    },


    {
        carname:'Rolls - Royce',
        carcategory:'Sedan',
        carimage: carimage3,
        fuel:'70L',
        fuelicon: icon1,
        circle: icon2,
        buyerpeopleicon: icon3,
        buyerpeople:'4 People',
        price:'$96.00/',
        dil: heart
    },


    {
        carname:'Nissan GT - R',
        carcategory:'Sport',
        carimage: carimage4,
        fuel:'80L',
        fuelicon: icon1,
        circle: icon2,
        buyerpeopleicon: icon3,
        buyerpeople:'2 People',
        price:'$80.00/',
        discountprice:'$100.00'
    },

]



function Carsproduct() {
  return (
    <>
           <Box sx={{padding:'0vh 4.3vw',}}>
           <Grid container spacing={6}>
    {
        Carsdata.map((data) =>{
            return(
         
                <>
                <Singlecarproduct productdata={data}/>
                
                </>
             
            )
        })
    }   </Grid>
                </Box>
    </>
  )
}

export default Carsproduct