import { Box, Grid } from '@mui/material'
import carimage1 from './Recommendation cars images/recommendcar1.svg'
import carimage2 from './Recommendation cars images/recommendcar2.svg'
import carimage3 from './Recommendation cars images/recommendcar3.svg'
import carimage4 from './Recommendation cars images/recommendcar4.svg'
import secondrowcar1 from './Recommendation cars images/secondrowcar1.svg'
import secondrowcar2 from './Recommendation cars images/secondrowcar2.svg'
import Singlecarproduct from '../ProductsSection/Singlecarproduct'
import icon1 from './Recommendation cars images/gas-station.svg'
import icon2 from './Recommendation cars images/Car.svg'
import icon3 from './Recommendation cars images/profile.svg'




const Recommencarsdata = [
    {
        carname:'All New Rush',
        carcategory:'SUV',
        carimage: carimage1,
        fuel:'70L',
        fuelicon: icon1,
        circle: icon2,
        buyerpeopleicon: icon3,
        buyerpeople:'6 People',
        price:'$72.00/',
        dil: false,
        discountprice:'$80.00',
    },


    {
        carname:'CR  - V',
        carcategory:'SUV',
        carimage: carimage2,
        fuel:'80L',
        fuelicon: icon1,
        circle: icon2,
        buyerpeopleicon: icon3,
        buyerpeople:'6 People',
        price:'$80.00/',
        dil: true
    },


    {
        carname:'All New Terios',
        carcategory:'SUV',
        carimage: carimage3,
        fuel:'90L',
        fuelicon: icon1,
        circle: icon2,
        buyerpeopleicon: icon3,
        buyerpeople:'6 People',
        price:'$74.00/',
        dil: false
    },


    {
        carname:'CR  - V',
        carcategory:'SUV',
        carimage: carimage4,
        fuel:'80L',
        fuelicon: icon1,
        circle: icon2,
        buyerpeopleicon: icon3,
        buyerpeople:'6 People',
        price:'$80.00/',
        dil: true
    },

    // 2

    {
        carname:'MG ZX Exclusice',
        carcategory:'Hatchback',
        carimage: secondrowcar1,
        fuel:'70L',
        fuelicon: icon1,
        circle: icon2,
        buyerpeopleicon: icon3,
        buyerpeople:'4 People',
        price:'$76.00/',
        dil: true,
        discountprice:'$80.00',
    },


    {
        carname:'New MG ZS',
        carcategory:'SUV',
        carimage: secondrowcar2,
        fuel:'80L',
        fuelicon: icon1,
        circle: icon2,
        buyerpeopleicon: icon3,
        buyerpeople:'6 People',
        price:'$80.00/',
        dil: false
    },


    {
        carname:'MG ZX Excite',
        carcategory:'Hatchback',
        carimage: secondrowcar1,
        fuel:'90L',
        fuelicon: icon1,
        circle: icon2,
        buyerpeopleicon: icon3,
        buyerpeople:'4 People',
        price:'$74.00/',
        dil: true
    },


    {
        carname:'New MG ZS',
        carcategory:'SUV',
        carimage: secondrowcar2,
        fuel:'80L',
        fuelicon: icon1,
        circle: icon2,
        buyerpeopleicon: icon3,
        buyerpeople:'6 People',
        price:'$80.00/',
        dil: false
    },
]


function Productcars() {
  return (
    <>
           <Box sx={{padding:'4vh 4.3vw',}}>
           <Grid container spacing={4}>
    {
        Recommencarsdata.map((data) =>{
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

export default Productcars