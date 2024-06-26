import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homepage from "../Pages/Home/Homepage"
import Categorypage from "../Pages/Category/Categorypage"
import Detailcarrent from "../Pages/Detailcarrent/Detailcarrent"
import PaymentPage from "../Pages/Payment/PaymentPage"
import Login from '../login-page/Login'



const Routes2 = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" Component={Homepage}/>
      <Route path="/home" Component={Homepage}/>
      <Route path="/category" Component={Categorypage}/>
      <Route path="/singlecar" Component={Detailcarrent}/>
      <Route path="/billing" Component={PaymentPage}/>
      <Route path="/login" Component={Login}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Routes2