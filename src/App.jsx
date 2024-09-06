import { Outlet } from "react-router-dom";
import MainLayouts from "./Components/Layouts/MainLayouts";
import Footer from "./Components/Layouts/Footer";



function App() {


  return (
    <>
     <div>
      <MainLayouts></MainLayouts>
     </div>
     <div>
      <Outlet></Outlet>
     </div>
     <div>
      <Footer></Footer>
     </div>
    </>
  );
}

export default App
