
import { Navigate } from "react-router-dom";
import Home from "../pages/home";
import Feng from "../pages/Feng.js";

const routes = [
  {
    path: "/",
    element: <Navigate to="/Home" />,
  },
  {
    path: "/Home",
    element: <Home></Home>,
  },
  {
    path: "/Feng",
    element: <Feng></Feng>,
  },
];

export default routes;