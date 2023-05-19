import { createBrowserRouter } from "react-router-dom";
import Main from "../Home/Main";
import Home from "../Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddToy from "../Pages/AddAToy/AddToy";

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
          element:<AddToy></AddToy>
        }
      ]
    },
  ]);

  export default router;