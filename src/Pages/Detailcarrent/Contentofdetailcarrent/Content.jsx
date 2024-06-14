import { Box, Button, Grid, Typography } from "@mui/material";
import hearticon from "./images/heart.svg";
import Stars from "../../../Components/Stars";
import car from './images/car.svg'
import view1 from './images/view1.svg'
import view2 from './images/view2.svg'

const Content = () => {
  return (
    <>
      {/* Wrapper */}
      <Box sx={{ padding: "32px 32px" }}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Box sx={{width:'492px',height:'508px'}}>
            <Box
              sx={{
                borderRadius: "10px",
                width: "100%",
                height: "360px",
                color: "#fff",
                backgroundColor: "#3563E9",
                padding: "24px 24px",
              }}
            >
              <Typography sx={{ fontSize: "32px", fontWeight: "600" }}>
                Sports car with the best design and acceleration
              </Typography>
              <Typography sx={{ marginTop: "16px",fontSize:'16px',width:'60%'}}>
                Safety and comfort while driving a futuristic and elegant sports
                car
              </Typography>

              <Box component={"img"} alt="" src={car} sx={{width:'380px',height:'120px',marginTop:'32px',marginLeft:'34px'}}/>
            </Box>

            <Box sx={{marginTop:'24px',padding:'0 .5vw'}}>  
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Box sx={{height:'124px',width:'100%',backgroundColor:'#3563E9',padding:'5px',borderRadius:'10px',display:'flex',justifyContent:'center',alignItems:'center'}}>
                            <Box component={"img"} alt="" src={car} sx={{width:'100%'}}/>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Box sx={{height:'124px',borderRadius:'10px',}}>
                        <Box component={"img"} alt="" src={view1} sx={{width:'100%'}}/>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Box sx={{height:'124px',borderRadius:'10px',}}>
                        <Box component={"img"} alt="" src={view2} sx={{width:'100%'}}/>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            </Box>
          </Grid>

          <Grid item xs={6}>
            <Box
              sx={{
                width: "100%",
                borderRadius: "10px",
                height: "508px",
                backgroundColor: "#fff",
                padding: "24px 24px 24px 24px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  marginBottom: "8px",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{ color: "#1A202C", fontSize: "32px", fontWeight: "600" }}
                >
                  Nissan GT - R
                </Typography>
                <Box
                  component={"img"}
                  sx={{ width: "max-content" }}
                  alt=""
                  src={hearticon}
                />
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Stars />
                <Typography
                  sx={{
                    color: "#596780",
                    fontSize: "14px",
                    fontWeight: "500",
                    marginLeft: "8px",
                    marginTop: "2px",
                  }}
                >
                  440+ Reviewer
                </Typography>
              </Box>

              <Box sx={{ marginTop: "32px", textAlign: "start" }}>
                <Typography
                  sx={{
                    fontSize: "20px",
                    color: "#596780",
                    letterSpacing: "-2%",
                    lineHeight: "1.5",
                  }}
                >
                  NISMO has become the embodiment of Nissan's outstanding
                  performance, inspired by the most unforgiving proving ground,
                  the "race track".
                </Typography>
              </Box>

              <Box sx={{ marginTop: "32px" }}>
                <Typography
                  sx={{
                    display: "inline-block",
                    marginRight: "30px",
                    fontSize: "20px",
                    color: "#90A3BF",
                  }}
                >
                  Typecar
                </Typography>
                <Typography
                  sx={{
                    display: "inline-block",
                    fontWeight: "600",
                    fontSize: "20px",
                    color: "#596780",
                  }}
                >
                  Sport
                </Typography>
                <Typography
                  sx={{
                    display: "inline-block",
                    marginLeft: "84px",
                    marginRight: "30px",
                    fontSize: "20px",
                    color: "#90A3BF",
                  }}
                >
                  Capacity
                </Typography>
                <Typography
                  sx={{
                    display: "inline-block",
                    fontWeight: "600",
                    fontSize: "20px",
                    color: "#596780",
                  }}
                >
                  2 Person
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    display: "inline-block",
                    marginRight: "30px",
                    fontSize: "20px",
                    color: "#90A3BF",
                  }}
                >
                  Steering
                </Typography>
                <Typography
                  sx={{
                    display: "inline-block",
                    fontWeight: "600",
                    fontSize: "20px",
                    color: "#596780",
                  }}
                >
                  Manual
                </Typography>
                <Typography
                  sx={{
                    display: "inline-block",
                    marginRight: "30px",
                    marginLeft: "64px",
                    fontSize: "20px",
                    color: "#90A3BF",
                  }}
                >
                  Gasoline
                </Typography>
                <Typography
                  sx={{
                    display: "inline-block",
                    fontWeight: "600",
                    fontSize: "20px",
                    color: "#596780",
                  }}
                >
                  70L
                </Typography>
              </Box>

              <Box
                sx={{
                  marginTop: "68px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    sx={{
                      color: "#1A202C",
                      fontWeight: "700",
                      marginRight: "10px",
                      fontSize: "28px",
                    }}
                  >
                    $80.00/
                  </Typography>
                  <Typography
                    sx={{
                      color: "#90A3BF",
                      fontSize: "16px",
                      fontweight: "700",
                    }}
                  >
                    days
                  </Typography>
                </Box>

                <Button
                  sx={{
                    textTransform: "none",
                    fontWeight: "700",
                    fontsize: "16px",
                    width: "140px",
                    height: "56px",
                  }}
                  variant="contained"
                >
                  Rent Now
                </Button>
              </Box>
              <Typography
                sx={{
                  textDecoration: "line-through",
                  color: "#90A3BF",
                  fontSize: "16px",
                  fontWeight: "700",
                }}
              >
                $100.00
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Wrapper */}
    </>
  );
};

export default Content;
