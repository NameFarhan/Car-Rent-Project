import { Box, Grid, Stack, Typography } from "@mui/material";


function Footer() {
  return (
    <Box sx={{ width: "100%", backgroundColor: "#fff", padding: "10vh 4.4vw",marginTop:'32px' }}>
      <Grid container>
        <Grid item xs={6}>
          <Box sx={{ width: "100%", height: "100%" }}>
            <Typography
              sx={{ color: "#3563E9", fontSize: "32px", fontWeight: "600" }}
            >
              MORENT
            </Typography>
            <Typography
              sx={{
                color: "#131313",
                fontSize: "16px",
                fontWeight: "500",
                marginTop: "16px",
              }}
            >
              Our vision is to provide convenience
              <br /> and help increase your sales business.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ display: "flex", justifyContent: "center", gap: "80px" }}>
            <Box>
              <Typography
                sx={{
                  color: "#1A202C",
                  fontSize: "20px",
                  fontWeight: "600",
                  marginBottom: "24px",
                }}
              >
                About
              </Typography>
              <Stack spacing={3}>
                <Typography
                  sx={{ color: "#717171", fontSize: "16px", fontWeight: "500" }}
                >
                  How it works
                </Typography>
                <Typography
                  sx={{ color: "#717171", fontSize: "16px", fontWeight: "500" }}
                >
                  Featured
                </Typography>
                <Typography
                  sx={{ color: "#717171", fontSize: "16px", fontWeight: "500" }}
                >
                  Partnership
                </Typography>
                <Typography
                  sx={{ color: "#717171", fontSize: "16px", fontWeight: "500" }}
                >
                  Bussiness Relation
                </Typography>
              </Stack>
            </Box>
            <Box>
              <Typography
                sx={{
                  color: "#1A202C",
                  fontSize: "20px",
                  fontWeight: "600",
                  marginBottom: "24px",
                }}
              >
                Community
              </Typography>
              <Stack spacing={3}>
                <Typography
                  sx={{ color: "#717171", fontSize: "16px", fontWeight: "500" }}
                >
                  Events
                </Typography>
                <Typography
                  sx={{ color: "#717171", fontSize: "16px", fontWeight: "500" }}
                >
                  Blog
                </Typography>
                <Typography
                  sx={{ color: "#717171", fontSize: "16px", fontWeight: "500" }}
                >
                  Podcast
                </Typography>
                <Typography
                  sx={{ color: "#717171", fontSize: "16px", fontWeight: "500" }}
                >
                  Invite a friend
                </Typography>
              </Stack>
            </Box>
            <Box>
              <Typography
                sx={{
                  color: "#1A202C",
                  fontSize: "20px",
                  fontWeight: "600",
                  marginBottom: "24px",
                }}
              >
                Socials
              </Typography>
              <Stack spacing={3}>
                <Typography
                  sx={{ color: "#717171", fontSize: "16px", fontWeight: "500" }}
                >
                  Discord
                </Typography>
                <Typography
                  sx={{ color: "#717171", fontSize: "16px", fontWeight: "500" }}
                >
                  Instagram
                </Typography>
                <Typography
                  sx={{ color: "#717171", fontSize: "16px", fontWeight: "500" }}
                >
                  Twitter
                </Typography>
                <Typography
                  sx={{ color: "#717171", fontSize: "16px", fontWeight: "500" }}
                >
                  Facebook
                </Typography>
              </Stack>
            </Box>
          </Box>

        </Grid>
        {/* hr */}
          <Box sx={{width:'100%',height:'1px',backgroundColor:'#aaa'
,marginTop:'46px'}}>
            {/* hr */}
          </Box>
      </Grid>
      <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',height:'100%',position:'relative',top:'40px'}}>
        <Typography sx={{color:'#1A202C',fontSize:'16px',fontWeight:'600'}}>©2022 MORENT. All rights reserved</Typography>
        <Box sx={{display:'flex',gap:'60px'}}>
            <Typography sx={{color:'#1A202C',fontSize:'16px',fontWeight:'600'}}>Privacy & Policy</Typography>
            <Typography sx={{color:'#1A202C',fontSize:'16px',fontWeight:'600'}}>Terms & Condition</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
