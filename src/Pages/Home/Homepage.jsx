import Appbar from "../../Shared/Appbar/Appbar";
import Hero from "./HeroSection/Hero";
import Filters from "./FilterSection/Filters";
import Products from "./ProductsSection/Products";
import Recommendationcars from './ReccomendationCars/Recommendcars'
import Footer from '../../Shared/Footer/Footer'




function Homepage() {
  return (
    <>
      <Appbar showSearchBox={true}/>
      <Hero />
      <Filters styles={{width:'486px',height:'136px',position:'relative',right:'20px',left:'118px',}} anotherstyles={{left:'5px',right:'16px'}} homepagestyles={{position:'relative',left:'180px',right:'150px'}} categorystyles={{marginLeft:'-95px',marginRight:'-90px'}}/>
      <Products/>
      <Recommendationcars/>
      <Footer styles={{marginTop:'0'}}/>
    </>
  );
}

export default Homepage;
