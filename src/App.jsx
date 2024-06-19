// App.jsx
import React from "react";
import "./App.css";
import Homepage from "./Pages/Home/Homepage";
import Categorypage from "./Pages/Category/Categorypage";
import Detailcarrent from "./Pages/Detailcarrent/Detailcarrent";
import PaymentPage from "./Pages/Payment/PaymentPage";
import Routes2 from "./Routes/Routes2";
import Login from '../src/login-page/Login';
function App() {

  

  return (
    <>
      <Routes2>
                  <Login/>
        <Homepage /> 
        <Categorypage />
        <Detailcarrent />
        <PaymentPage />
      </Routes2>

    </>
  );
}

export default App;
