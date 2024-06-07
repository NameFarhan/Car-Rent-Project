import Appbar from "../../Shared/Appbar/Appbar";
import Hero from "./HeroSection/Hero";
import Filters from "./FilterSection/Filters";


function Homepage() {
  return (
    <>
      <Appbar />
      <Hero />
      <Filters/>
    </>
  );
}

export default Homepage;
