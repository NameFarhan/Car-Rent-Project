import { Box, Stack, Toolbar, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import herocarimage1 from "./Heroimages/Herocar1.svg";
import herocarimage2 from "./Heroimages/Herocar2.svg";

function Hero() {
  return (
    <>
      <Box sx={{padding:'3vh 4vw'}}>
        <Grid container spacing={2} sx={{display:'flex',justifyContent:'center',flexDirection:'row'}}>

          <Grid
            item
           xs={6}
          >

            <Box sx={{backgroundColor: "#54A6FF",width:'640px',height:'360px',borderRadius:'10px'}}>
              
            <Toolbar sx={{ display: "flex", height: "80%", }}>
              <Stack spacing={2}>
                <Typography
                  sx={{ fontSize: "32px", fontWeight: "500", color: "#fff" }}
                >
                  The Best Platform
                  <br /> for Car Rental
                </Typography>
                <Typography
                  sx={{
                    color: "#fff",
                    fontSize: "16px",
                  }}
                >
                  Ease of doing a car rental safely and
                  <br /> reliably. Of course at a low price.
                </Typography>

                <Button
                  sx={{
                    "&:hover": {
                      boxShadow: "0",
                      backgroundColor: "#3563E9",
                    },
                    width: "120px",
                    fontSize: "16px",
                    height: "44px",
                    backgroundColor: "#3563E9",
                    textTransform: "none",
                    boxShadow: "0",
                  }}
                  variant="contained"
                >
                  Rental Car
                </Button>
              </Stack>
            </Toolbar>
            <Box
              component="img"
              sx={{
                height: 116,
                width: 406,
                marginLeft: "20%",
                position: "relative",
                bottom: "7vh",
              }}
              alt="The house from the offer."
              src={herocarimage1}
            />
            </Box>
          </Grid>
          <Grid
            sx={{
              
            height: "360px",
              borderRadius: "10px",
             width:'640px'
            }}
            item
               xs={6}
          >

            <Box sx={{backgroundColor: "#3563E9",width:'640px',height:'360px',borderRadius:'10px'}}>
            <Toolbar sx={{ display: "flex", height: "80%", }}>
              <Stack spacing={2}>
                <Typography
                  sx={{ fontSize: "32px", fontWeight: "500", color: "#fff" }}
                >
                  Easy way to rent a<br /> car at a low price
                </Typography>
                <Typography
                  sx={{
                    color: "#fff",
                    fontSize: "16px",
                  }}
                >
                  Providing cheap car rental services
                  <br /> and safe and comfortable facilities.
                </Typography>

                <Button
                  sx={{
                    width: "120px",
                    fontSize: "16px",
                    height: "44px",
                    backgroundColor: "#54A6FF",
                    boxShadow: "0",
                    textTransform: "none",
                    "&:hover": {
                      boxShadow: "0",
                      backgroundColor: "#54A6FF",
                    },
                  }}
                  variant="contained"
                >
                  Rental Car
                </Button>
              </Stack>
            </Toolbar>
            <Box
              component="img"
              sx={{
                height: 108,
                width: 340,
                marginLeft: "29%",
                position: "relative",
                bottom: "7vh",
              }}
              alt="The house from the offer."
              src={herocarimage2}
            />
             </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Hero;
