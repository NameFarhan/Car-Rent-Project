import { Box, Grid, Typography } from "@mui/material";
import emptyheart from "./Productsimages/emptyheart.svg";
import heart from "./Productsimages/redheart.svg";
import car1 from './Productsimages/carimage1.svg'
import fuelicon from './Productsimages/gas-station.svg'
import circle from './Productsimages/Car.svg'
import buyerpeopleicon from './Productsimages/profile.svg'
function Singlecarproduct({ styles, productdata }) {
  return (
    <>
      <Grid item xs={3}>
        <Box
          sx={{
            padding: "0vh 1.4vw",
            width: styles.width,
            height: "388px",
            borderRadius: "10px",
            backgroundColor: "#fff",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
{
  productdata.is_favourite   ?   <Box
              component="img"
              sx={{
                height: 17,
                cursor: "pointer",
                position: "relative",
                left: "90%",
                top: "27px",
                width: 20,
              }}
              alt="Cars"
              src={heart}
            />:
                <Box
              component="img"
              sx={{
                height: 17,
                cursor: "pointer",
                position: "relative",
                left: "90%",
                top: "27px",
                width: 20,
              }}
              alt="Cars"
              src={emptyheart}
            />
            }
        
          
            <Typography
              sx={{ color: "#1A202C", fontSize: "20px", fontWeight: "700" }}
            >
              {productdata.name}
            </Typography>
            <Typography
              sx={{ color: "#90A3BF", fontSize: "14px", fontWeight: "700" }}
            >
              {productdata.category}
            </Typography>
            <Box
              component="img"
              sx={{
                height: 80,
                marginTop: "35%",
                position: "relative",
                bottom: "20px",
                left: "10px",
                width: 240,
              }}
              alt="Cars"
              src={car1}
            />
            <Box
              sx={{
                display: "flex",
                width: "100%",
                height: "24px",
                marginTop: "5vh",
              }}
            >
              <Grid container>
                <Grid item xs={4}>
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      component="img"
                      sx={{
                        height: 20,
                        width: 20,
                      }}
                      alt="Cars"
                      src={fuelicon}
                    />
                    <Typography
                      sx={{
                        color: "#90A3BF",
                        fontSize: "14px",
                        marginLeft: "3px",
                      }}
                    >
                      {productdata.tank_capacity}L
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      position: "relative",
                      right: "11px",
                    }}
                  >
                    <Box
                      component="img"
                      sx={{
                        height: 20,
                        width: 20,
                      }}
                      alt="Cars"
                      src={circle}
                    />
                    <Typography
                      sx={{
                        color: "#90A3BF",
                        fontSize: "14px",
                        marginLeft: "3px",
                      }}
                    >
                      Manual
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      component="img"
                      sx={{
                        height: 20,
                        width: 20,
                      }}
                      alt="Cars"
                      src={buyerpeopleicon}
                    />
                    <Typography
                      sx={{
                        color: "#90A3BF",
                        fontSize: "14px",
                        marginLeft: "3px",
                      }}
                    >
                      {productdata.seating_capacity}People
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Box
              sx={{
                marginTop: "2vh",
                height: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{
                  color: "#1A202C",
                  fontSize: "20px",
                  fontWeight: "700",
                  marginTop: "6px",
                }}
              >
                ${productdata.rent_per_day}.00 /
                <Typography
                  sx={{
                    color: "#90A3BF",
                    display: "inline-block",
                    marginLeft: "4px",
                    fontSize: "14px",
                    fontWeight: "700",
                  }}
                >
                  day
                </Typography>
              </Typography>

              <Box
                sx={{
                  width: "116px",
                  height: "44px",
                  backgroundColor: "#3563E9",
                  color: "#fff",
                  borderRadius: "5px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Rent Now
              </Box>
            </Box>
            <Box
              sx={{
                color: "#90A3BF",
                fontWeight: "700",
                fontSize: "14px",
                textDecoration: "line-through",
              }}
            >
              {productdata.discountprice}
            </Box>
          </Box>
        </Box>
      </Grid>
    </>
  );
}

export default Singlecarproduct;
