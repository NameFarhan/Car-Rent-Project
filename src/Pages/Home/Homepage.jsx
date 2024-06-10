import Appbar from "../../Shared/Appbar/Appbar";
import Hero from "./HeroSection/Hero";
import Filters from "./FilterSection/Filters";
import Products from "./ProductsSection/Products";
import Recommendationcars from './ReccomendationCars/Recommendcars'
import Footer from '../../Shared/Footer/Footer'




function Homepage() {
  return (
    <>
      <Appbar />
      <Hero />
      <Filters/>
      <Products/>
      <Recommendationcars/>
      <Footer/>
    </>
  );
}

export default Homepage;
