import { FaFacebookSquare,FaInstagramSquare } from "react-icons/fa";
import logo from '../assets/images/logo.png'
const Footer = () => {
    return (
        <footer className="footer  footer-center p-10 bg-slate-900 text-white  rounded">
            <div className="grid grid-flow-col gap-4">
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </div>
            <div>
                <div className=" ">
                    
                   <img className='w-14 mx-auto' src={logo} alt="" /><br />
                   <button className='btn btn-outline btn-primary w-72'><FaFacebookSquare className="text-3xl"/> Contact us with Facebook</button>
                   <button  className='btn btn-outline btn-error w-72'><FaInstagramSquare className="text-3xl"/> Contact us with Instagram</button>
                </div>
            </div>
            <div>
                <p>Copyright © 2023 - All right reserved by <span className="font-bold">Avengers Toy<span className="text-red-600">Store</span></span> Ltd</p>
            </div>
        </footer>
    );
};

export default Footer;