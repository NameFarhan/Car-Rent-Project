

import Appbar from '../../Shared/Appbar/Appbar'
import Catsidebar from '../Category/Sidebarofcategorypage/Catsidebar'
import Footer from '../../Shared/Footer/Footer'
import Content from './Contentofdetailcarrent/Content'
import { Grid } from '@mui/material'
import Reviews from './Reviews/Reviews'
import Cars from './Cars/Cars'

const Detailcarrent = ({}) => {
  return (
    <>
    <Appbar showSearchBox={true}/>
    <Grid container>
    <Catsidebar/>
    <Grid item xs={9}>

        
    <Content/>

    <Reviews/>

    <Cars styles={{marginLeft:'0',paddingRight:'25px',marginTop:'20px'}}/>


    
    </Grid>
    </Grid>
    <Footer styles={{marginTop:'0'}}/>
    </>
  )
}

export default Detailcarrent