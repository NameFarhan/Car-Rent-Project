import "./App.css";
  import Homepage from "./Pages/Home/Homepage";
 import Categorypage from "./Pages/Category/Categorypage";
 import Detailcarrent from "./Pages/Detailcarrent/Detailcarrent";
 import PaymentPage from "./Pages/Payment/PaymentPage";
 import Routes2 from "./Routes/Routes2";
function App() {
  return (
    <>

<Routes2>
      <Homepage/> 
      <Categorypage/>
      <Detailcarrent/>
      <PaymentPage/>
      </Routes2>
    </>
  );
}

export default App;
