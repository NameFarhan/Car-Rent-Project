import { Box, Grid } from "@mui/material";
import carimage1 from "./Productsimages/carimage1.svg";
import carimage2 from "./Productsimages/carimage2.svg";
import carimage3 from "./Productsimages/carimage3.svg";
import carimage4 from "./Productsimages/carimage4.svg";
import Singlecarproduct from "./Singlecarproduct";
import icon1 from "./Productsimages/gas-station.svg";
import icon2 from "./Productsimages/Car.svg";
import icon3 from "./Productsimages/profile.svg";
import { useState, useEffect } from "react";
import axios from "axios";

const Carsdata = [
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
    carcategory: "Sedan",
    carimage: carimage3,
    fuel: "70L",
    fuelicon: icon1,
    circle: icon2,
    buyerpeopleicon: icon3,
    buyerpeople: "4 People",
    price: "$96.00/",
    dil: true,
  },

  {
    carname: "Nissan GT - R",
    carcategory: "Sport",
    carimage: carimage4,
    fuel: "80L",
    fuelicon: icon1,
    circle: icon2,
    buyerpeopleicon: icon3,
    buyerpeople: "2 People",
    price: "$80.00/",
    discountprice: "$100.00",
    dil: false,
  },
];

function Carsproduct() {
  const [carData, setCarData] = useState([]);

  const getCars = async () => {
    console.log("test");
    try {
      const response = await axios.get(
        "https://dfd8-103-101-232-126.ngrok-free.app/api/v1/cars?per_page=10&page=1",
        {
          headers: {
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "true",
          },
        }
      );
      console.log("response:", response.data);
      setCarData(response.data.data);
      // Optionally, you can redirect or perform other actions upon successful login
    } catch (error) {
      console.error("Login error:", error);
      setMessage(error.message);
      // Handle error states, such as displaying an error message to the user
    }
  };

  useEffect(() => {
    getCars();
  }, []);

  return (
    <>
      <Box sx={{ padding: "0vh 4.3vw" }}>
        <Grid container spacing={4}>
          {carData.map((data) => {
            return (
              <>
                <Singlecarproduct
                  styles={{ width: "317px" }}
                  productdata={data.attributes}
                />
              </>
            );
          })}{" "}
        </Grid>
      </Box>
    </>
  );
}

export default Carsproduct;
