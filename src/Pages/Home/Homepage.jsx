import { Typography } from "@mui/material";
import Appbar from "../../Shared/Appbar/Appbar";
import Hero from "./HeroSection/Hero";

function Homepage() {
  return (
    <>
      <Appbar />
      <Typography fontSize={200}>Test</Typography>
      <Hero />
    </>
  );
}

export default Homepage;
