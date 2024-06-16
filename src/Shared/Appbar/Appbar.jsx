import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SettingsIcon from "@mui/icons-material/Settings";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import { Grid } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import appbarimage from "../Appbar/appbarimage1.svg";
import filter from "../Appbar/filter.svg";

const Search = styled("div")(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function PrimarySearchAppBar({showSearchBox}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    
    <AppBar position="static"
      sx={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#fff",
        boxShadow: "0",
        height:'124px',
        paddingLeft:'2vw',
        paddingRight:'2vw'
     }}
    >
      <Toolbar>
        <Grid container>
          <Grid item xs={2}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                display: {
                  xs: "none",
                  sm: "block",
                  fontSize: "32px",
                  fontWeight: "700",
                  color: "#3563E9",
                },
              }}
            >
              MORENT
            </Typography>
          </Grid>

          <Grid sx={{ marginTop: "9px" }} item xs={4}>
            { showSearchBox &&
            <Search
              sx={{
                borderRadius: "70px",
                border: "1px solid #C3D4E9",
                position: "relative",
              }}
            >
              <SearchIconWrapper sx={{ position: "absolute" }}>
                <SearchIcon
                  sx={{ width: "19px", height: "19px", color: "#596780" }}
                />
              </SearchIconWrapper>

              <StyledInputBase
                sx={{
                  fontSize: "14px",
                  color: "#596780",
                  width: "100%",
                  height: "100%",
                }}
                placeholder="Search something here"
                inputProps={{ "aria-label": "Search something here" }}
              />
              <Box
                component="img"
                sx={{
                  position: "absolute",
                  right: "17px",
                  width: "24px",
                  height: "24px",
                  top: "6px",
                }}
                alt=""
                src={filter}
              />
            </Search>
            }
          </Grid>

          <Grid
            sx={{ display: "flex", justifyContent: "flex-end" }}
            item
            xs={6}
          >
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Grid container spacing={0.5}>
                <Grid item>
                  <IconButton>
                    <FavoriteIcon
                      sx={{
                        color: "#596780",
                        border: "1px solid #C3D4E9",
                        borderRadius: "90px",
                        width:'44px',
                        height:'44px',
                        padding: "10px",
                      }}
                    />
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton
                  >
                    <Badge variant="dot" color="error">
                      <NotificationsIcon
                        sx={{
                          color: "#596780",
                          border: "1px solid #C3D4E9",
                          borderRadius: "90px",
                          padding: "10px",
                          width:'44px',
                          height:'44px',
                        }}
                      />
                    </Badge>
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton>
                    <SettingsIcon
                      sx={{
                        color: "#596780",
                        border: "1px solid #C3D4E9",
                        borderRadius: "90px",
                        padding: "10px",
                        width:'44px',
                        height:'44px',
                      }}
                    />
                  </IconButton>
                </Grid>

                <Grid item>
                  <IconButton>
                    <Avatar
                      sx={{ width: "44px", height: "44px" }}
                      alt="Remy Sharp"
                      src={appbarimage}
                    />
                  </IconButton>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="show more"
            aria-controls={mobileMenuId}
            aria-haspopup="true"
            onClick={handleMobileMenuOpen}
            color="inherit"
          >
            <MoreIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
    // {renderMobileMenu}
    // {renderMenu}
  );
}
