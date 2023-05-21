import { Outlet } from "react-router-dom";

import Nav from "../Pages/Headers/Nav";
import Footer from "../Pages/Footer";


const Main = () => {
    return (
        <div className="bg-red-50">
           <Nav></Nav>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Main;