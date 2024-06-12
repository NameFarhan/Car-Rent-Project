import Catsinglecard from "./Catsinglecard"
import { Box, Grid } from "@mui/material"


const Catcarsdata = [
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
      dil: true
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
      discountprice:'$100.00',
      dil: false
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
    dil: false,
},

// 2nd row 
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

// 3rd row
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
  dil: false,
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



]

function Catcarlist() {
  return (
    <>
           <Box sx={{padding:'0vh 4.3vw',}}>
           <Grid container spacing={4}>
    {
        Catcarsdata.map((data) =>{
            return(
         
                <>
                <Catsinglecard Catproductdata={data}/>
                
                </>
             
            )
        })
    }   </Grid>
                </Box>
    </>
  )
}

export default Catcarlist