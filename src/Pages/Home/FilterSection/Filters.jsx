import { Box, Typography, Grid } from "@mui/material";
import radio from "./Filterimages/radio.svg";
import arrow from "./Filterimages/arrow-down-filters.svg";
import line from "./Filterimages/line.png";
import swap from "./Filterimages/swap.svg";

function Filters({ styles , homepagestyles , categorystyles }) {
  return (
    <>
      <Box sx={{ padding: "3vh 1.5vw" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box
            sx={{
              backgroundColor: "#fff",
              borderRadius: "10px",
              width:styles.width,
              height:styles.height,
              padding: "3vh 2.5vw",
              position:homepagestyles.position,
              left:homepagestyles.left,
              marginLeft:categorystyles.marginLeft
            }}
          >
            <Grid container>
              <Grid item xs={4}>
                <Box sx={{position:styles.position,right:styles.right,}}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <Box
                    component="img"
                    sx={{
                      height: 16,
                      width: 16,
                    }}
                    alt=""
                    src={radio}
                  />

                  <Typography
                    sx={{
                      marginLeft: "8px",
                      color: "#1A202C",
                      fontSize: "16px",
                      fontWeight: "500",
                    }}
                  >
                    Pick - Up
                  </Typography>
                </Box>

                <Typography
                  sx={{ color: "#1A202C", fontSize: "16px", fontWeight: "600" }}
                >
                  Locations
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-end",
                    marginTop: "8px",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#90A3BF",
                      fontSize: "12px",
                      fontWeight: "500",
                    }}
                  >
                    Select your city
                  </Typography>
                  <Box
                    component="img"
                    sx={{
                      height: 16,
                      width: 16,
                      marginLeft: "10px",
                    }}
                    alt=""
                    src={arrow}
                  />
                </Box>

                {/* LINE1 */}
                <Box
                  component="img"
                  sx={{
                    position:styles.position,
                    left:styles.left,
                    bottom: "50px",
                    opacity: "0.5",
                    height: 47,
                    width: 2,
                  }}
                  alt=""
                  src={line}
                />
                </Box>
              </Grid>

              {/* 2nd Row */}

              <Grid item xs={4}>
                <Box sx={{ padding: "4.5vh 0" ,position:styles.position,right:styles.right }}>
                  <Typography
                    sx={{
                      color: "#1A202C",
                      fontSize: "16px",
                      fontWeight: "600",
                    }}
                  >
                    Date
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-end",
                      marginTop: "8px",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#90A3BF",
                        fontSize: "12px",
                        fontWeight: "500",
                      }}
                    >
                      Select your Date
                    </Typography>
                    <Box
                      component="img"
                      sx={{
                        height: 16,
                        width: 16,
                        marginLeft: "10px",
                      }}
                      alt=""
                      src={arrow}
                    />
                  </Box>
                </Box>

                {/* 2nd line */}

                <Box
                  component="img"
                  sx={{
                    position: "relative",
                    left: "85%",
                    bottom: "85px",
                    opacity: "0.5",
                    height: 47,
                    width: 2,
                  }}
                  alt=""
                  src={line}
                />
              </Grid>

              {/* 3rd Row */}

              <Grid item xs={4}>
                <Box sx={{ padding: "4.5vh 0" }}>
                  <Typography
                    sx={{
                      color: "#1A202C",
                      fontSize: "16px",
                      fontWeight: "600",
                    }}
                  >
                    Time
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-end",
                      marginTop: "8px",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#90A3BF",
                        fontSize: "12px",
                        fontWeight: "500",
                      }}
                    >
                      Select your Time
                    </Typography>
                    <Box
                      component="img"
                      sx={{
                        height: 16,
                        width: 16,
                        marginLeft: "10px",
                      }}
                      alt=""
                      src={arrow}
                    />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>

          {/* Center Button */}
          <Box
            sx={{
              backgroundColor: "#3563E9",
              borderRadius: "10px",
              width: "60px",
              height: "60px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "5vh 0",
              zIndex:'1000',
              position:'relative',
              left:'2px'
            }}
          >
            <Box
              component="img"
              sx={{
                height: 19,
                width: 19,
                zIndex:styles.zIndex,
              }}
              alt=""
              src={swap}
            />
          </Box>

          {/* 2nd Filter */}

          <Box
            sx={{
              padding: "3vh 1.5vw",
              backgroundColor: "#fff",
              borderRadius: "10px",
              width:styles.width,
              height:styles.height,
              position:homepagestyles.position,
              right:homepagestyles.right,
              marginRight:categorystyles.marginRight
            }}
          >
            <Grid container>
              <Grid item xs={4}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "10px",
                    marginBottom: "10px",
                  }}
                >
                  <Box
                    component="img"
                    sx={{
                      height: 16,
                      width: 16,
                    }}
                    alt=""
                    src={radio}
                  />

                  <Typography
                    sx={{
                      marginLeft: "8px",
                      color: "#1A202C",
                      fontSize: "16px",
                      fontWeight: "500",
                    }}
                  >
                    Drop - Off
                  </Typography>
                </Box>

                <Typography
                  sx={{ color: "#1A202C", fontSize: "16px", fontWeight: "600" }}
                >
                  Locations
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-end",
                    marginTop: "8px",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#90A3BF",
                      fontSize: "12px",
                      fontWeight: "500",
                    }}
                  >
                    Select your city
                  </Typography>
                  <Box
                    component="img"
                    sx={{
                      height: 16,
                      width: 16,
                      marginLeft: "10px",
                    }}
                    alt=""
                    src={arrow}
                  />
                </Box>

                {/* LINE1 */}
                <Box
                  component="img"
                  sx={{
                    position: "relative",
                    left: "80%",
                    bottom: "50px",
                    opacity: "0.5",
                    height: 47,
                    width: 2,
                  }}
                  alt=""
                  src={line}
                />
              </Grid>

              {/* 2nd Row */}

              <Grid item xs={4}>
                <Box sx={{ padding: "4.5vh 0" }}>
                  <Typography
                    sx={{
                      color: "#1A202C",
                      fontSize: "16px",
                      fontWeight: "600",
                    }}
                  >
                    Date
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-end",
                      marginTop: "8px",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#90A3BF",
                        fontSize: "12px",
                        fontWeight: "500",
                      }}
                    >
                      Select your Date
                    </Typography>
                    <Box
                      component="img"
                      sx={{
                        height: 16,
                        width: 16,
                        marginLeft: "10px",
                      }}
                      alt=""
                      src={arrow}
                    />
                  </Box>
                </Box>

                {/* 2nd line */}

                <Box
                  component="img"
                  sx={{
                    position: "relative",
                    left: "85%",
                    bottom: "85px",
                    opacity: "0.5",
                    height: 47,
                    width: 2,
                  }}
                  alt=""
                  src={line}
                />
              </Grid>

              {/* 3rd Row */}

              <Grid item xs={4}>
                <Box sx={{ padding: "4.5vh 0" }}>
                  <Typography
                    sx={{
                      color: "#1A202C",
                      fontSize: "16px",
                      fontWeight: "600",
                    }}
                  >
                    Time
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-end",
                      marginTop: "8px",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#90A3BF",
                        fontSize: "12px",
                        fontWeight: "500",
                      }}
                    >
                      Select your Time
                    </Typography>
                    <Box
                      component="img"
                      sx={{
                        height: 16,
                        width: 16,
                        marginLeft: "10px",
                      }}
                      alt=""
                      src={arrow}
                    />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Filters;
