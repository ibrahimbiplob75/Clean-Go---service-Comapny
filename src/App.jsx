import { Outlet } from "react-router-dom";
import MainLayouts from "./Components/Layouts/MainLayouts";



function App() {


  return (
    <>
     <div>
      <MainLayouts></MainLayouts>
     </div>
     <div>
      <Outlet></Outlet>
     </div>
    </>
  );
}

export default App
