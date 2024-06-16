import Appbar from '../../Shared/Appbar/Appbar'
import Footer from '../../Shared/Footer/Footer'
import MiddleContent from './MiddleContent/MiddelContent'

const PaymentPage = () => {
  return (

    <>
    <Appbar showSearchBox={false}/>
    <MiddleContent/>
    <Footer styles={{marginTop:'0'}}/>
    </>
  )
}

export default PaymentPage