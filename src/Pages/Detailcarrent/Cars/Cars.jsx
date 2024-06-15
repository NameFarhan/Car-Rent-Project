import { Box, Grid, Typography } from "@mui/material";
import RecentCars from "./RecentCars";
import carimage1 from "./CarsImages/carimage1.svg";
import carimage2 from "./CarsImages/carimage2.svg";
import carimage3 from "./CarsImages/carimage3.svg";
import carimage4 from "./CarsImages/row2car1.svg";
import carimage5 from "./CarsImages/row2car2.svg";
import carimage6 from "./CarsImages/row2car3.svg";
import icon1 from "./CarsImages/gas-station.svg";
import icon2 from "./CarsImages/Car.svg";
import icon3 from "./CarsImages/profile.svg";
import RecommendCars from "./RecommendCars";

const Catcarsdata = [
  {
    carname: "Koenigsegg",
    carcategory: "Sport",
    carimage: carimage1,
    fuel: "90L",
    fuelicon: icon1,
    circle: icon2,
    buyerpeopleicon: icon3,
    buyerpeople: "2 People",
    price: "$99.00/",
    dil: true,
  },
  {
    carname: "Nissan GT - R",
    carcategory: "Sport",
    carimage: carimage2,
    fuel: "80L",
    fuelicon: icon1,
    circle: icon2,
    buyerpeopleicon: icon3,
    buyerpeople: "2 People",
    price: "$80.00/",
    discountprice: "$100.00",
    dil: false,
  },
  {
    carname: "Rolls - Royce",
    carcategory: "sport",
    carimage: carimage3,
    fuel: "70L",
    fuelicon: icon1,
    circle: icon2,
    buyerpeopleicon: icon3,
    buyerpeople: "4 People",
    price: "$96.00/",
    dil: false,
  },
];

// recoommend cars data

const Recommencarsdata = [
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
    carimage: carimage5,
    fuel:'90L',
    fuelicon: icon1,
    circle: icon2,
    buyerpeopleicon: icon3,
    buyerpeople:'6 People',
    price:'$74.00/',
    dil: false
},

  ];

const Cars = ({ styles }) => {
  return (
    <Box sx={{ paddingRight: "2.1vw", paddingLeft: "2.3vw" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0 2vw",
        }}
      >
        <Typography
          sx={{ color: "#90A3BF", fontSize: "16px", fontWeight: "600" }}
        >
          Recent Car
        </Typography>
        <Typography
          sx={{ color: "#3563E9", fontWeight: "600", fontSize: "16px" }}
        >
          View All
        </Typography>
      </Box>

      {/* REACENT CARS */}
      <Box
        sx={{
          padding: "1vh .1vw 0 .1vw",
          width: "1015px",
          display: "flex",
          justifyContent: "center",
          marginLeft: styles.marginLeft,
          paddingRight: styles.paddingRight,
          marginTop: styles.marginTop,
        }}
      >
        <Grid container spacing={5}>
          {Catcarsdata.map((data) => {
            return (
              <>
                <RecentCars data={data} />
              </>
            );
          })}
        </Grid>
      </Box>
      {/* REACENT CARS */}

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "32px",
          padding: "0 20px",
        }}
      >
        <Typography
          sx={{ color: "#90A3BF", fontSize: "16px", fontWeight: "600" }}
        >
          Recomendation Car
        </Typography>
        <Typography
          sx={{ color: "#3563E9", fontSize: "16px", fontWeight: "600" }}
        >
          View All
        </Typography>
      </Box>
      {/* Recommend cars */}

      <Box
        sx={{
          padding: "1vh .1vw 0 .1vw",
          width: "1015px",
          display: "flex",
          justifyContent: "center",
          marginLeft: styles.marginLeft,
          paddingRight: styles.paddingRight,
          marginTop: styles.marginTop,
          marginBottom:'40px'
        }}
      >
        <Grid container spacing={5}>
          {Recommencarsdata.map((data) => {
            return (
              <>
                <RecommendCars data={data} />
              </>
            );
          })}
        </Grid>
      </Box>

      {/* Recommen cars */}
    </Box>
  );
};

export default Cars;
