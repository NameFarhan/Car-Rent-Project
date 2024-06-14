import { Box, Grid, Typography } from "@mui/material";
import emptyheart from "./Productsimages/emptyheart.svg";
import heart from "./Productsimages/redheart.svg";

function Singlecarproduct({ productdata, styles }) {
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
  productdata.dil ?   <Box
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
              {productdata.carname}
            </Typography>
            <Typography
              sx={{ color: "#90A3BF", fontSize: "14px", fontWeight: "700" }}
            >
              {productdata.carcategory}
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
              src={productdata.carimage}
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
                      src={productdata.fuelicon}
                    />
                    <Typography
                      sx={{
                        color: "#90A3BF",
                        fontSize: "14px",
                        marginLeft: "3px",
                      }}
                    >
                      {productdata.fuel}
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
                      src={productdata.circle}
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
                      src={productdata.buyerpeopleicon}
                    />
                    <Typography
                      sx={{
                        color: "#90A3BF",
                        fontSize: "14px",
                        marginLeft: "3px",
                      }}
                    >
                      {productdata.buyerpeople}
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
                {productdata.price}
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
