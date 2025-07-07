 
import { Navigate } from "react-router-dom";
import Home from "../pages/Home.js";
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
  {
    path: "/Goods",
    // element: <Goods></Goods>,
    children: [
        {
          path: "Detail",
          // element: <Detail></Detail>,
        },
        {
          path: "Comment",
          // element: <Comment></Comment>
        }
    ],
  },
];
 
export default routes;