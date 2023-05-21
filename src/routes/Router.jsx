import { createBrowserRouter } from "react-router-dom";
import Main from "../Home/Main";
import Home from "../Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddToy from "../Pages/AddAToy/AddToy";
import UserToys from "../Pages/UserToys/UserToys";
import AllToys from "../Pages/AllToys/AllToys";
import PrivetRoutes from "./PrivetRoutes";
import Details from "../Pages/Details/Details";

 const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
          element:<Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register> </Register>
        },
        {
          path:'/add',
          element:<PrivetRoutes><AddToy></AddToy></PrivetRoutes>
        },
        {
          path:'/usertoys',
          element:<PrivetRoutes><UserToys></UserToys></PrivetRoutes>
        },
        {
          path:'/all-toys',
          element:<AllToys></AllToys>
        },
        {
          path:'/details/:id',
          element:<PrivetRoutes><Details></Details></PrivetRoutes>,
          loader:({params})=>fetch(`http://localhost:5000/to?id=${params.id}`)
          
        }
      ]
    },
  ]);

  export default router;