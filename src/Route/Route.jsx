import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../Pages/About";
import Home from "../Pages/Home";

const route = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index:true,
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
    ],
  },
]);
    


export default route;