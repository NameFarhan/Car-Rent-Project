import Catsinglecard from "../Catcarlist/Catsinglecard"
import carimage1 from './Categorypagecarimages/carimage1.svg'
import carimage2 from './Categorypagecarimages/carimage2.svg'
import carimage3 from './Categorypagecarimages/carimage3.svg'
import carimage4 from './Categorypagecarimages/row2car1.svg'
import carimage5 from './Categorypagecarimages/row2car2.svg'
import carimage6 from './Categorypagecarimages/row2car3.svg'
import carimage7 from './Categorypagecarimages/row3car1.svg'
import carimage8 from './Categorypagecarimages/row3car2.svg'
import carimage9 from './Categorypagecarimages/row3car3.svg'
import icon1 from './Categorypagecarimages/gas-station.svg'
import icon2 from './Categorypagecarimages/Car.svg'
import icon3 from './Categorypagecarimages/profile.svg'
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
      carimage: carimage2,
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
    carcategory:'sport',
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
  carimage: carimage4,
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
  carimage: carimage5,
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
  carimage: carimage6,
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
  carimage: carimage7,
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
  carimage: carimage8,
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
  carimage: carimage9,
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

  return(

    <Box sx={{padding:'1vh .1vw 0 .1vw',width:'1015px',display:'flex',justifyContent:'center',marginLeft:'25px'}}>
    <Grid container spacing={5}>
  {

      Catcarsdata.map((data) =>{
        return(
          <>
          <Catsinglecard data={data}/>
          
          </>
        )

      })
      }
    </Grid>
    </Box>

          

  )
}

export default Catcarlist