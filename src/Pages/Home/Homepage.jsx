import Appbar from "../../Shared/Appbar/Appbar";
import Hero from "./HeroSection/Hero";
import Filters from "./FilterSection/Filters";
import Products from "./ProductsSection/Products";


function Homepage() {
  return (
    <>
      <Appbar />
      <Hero />
      <Filters/>
      <Products/>
    </>
  );
}

export default Homepage;
