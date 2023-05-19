import { Outlet } from "react-router-dom";

import Nav from "../Pages/Headers/Nav";
import Footer from "../Pages/Footer";


const Main = () => {
    return (
        <div>
           <Nav></Nav>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Main;