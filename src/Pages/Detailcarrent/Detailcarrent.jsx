

import Appbar from '../../Shared/Appbar/Appbar'
import Catsidebar from '../Category/Sidebarofcategorypage/Catsidebar'
import Footer from '../../Shared/Footer/Footer'
import Content from './Contentofdetailcarrent/Content'
import { Grid } from '@mui/material'


const Detailcarrent = ({}) => {
  return (
    <>
    <Appbar/>
    <Grid container>
    <Catsidebar/>
    <Grid item xs={9}>

        
    <Content/>
    </Grid>
    </Grid>
    <Footer styles={{marginTop:'0'}}/>
    </>
  )
}

export default Detailcarrent