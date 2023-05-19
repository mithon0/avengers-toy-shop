import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import logo from '../../assets/images/logo.png'

const Nav = () => {
    const { user, loggedUser, logOut } = useContext(AuthContext);
    console.log(user);
    const logOutHandler = () => {
        logOut();
    }
    const name = loggedUser?.displayName;
    const photo = loggedUser?.photoURL;
    const email = loggedUser?.email;
    console.log(photo);
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul className=" font-semibold menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li>{
                            user?<Link>All Toys</Link>:<></>
                        }</li>
                        <li>{
                            user?<Link>My Toys</Link>:<></>
                        }</li>
                        <li>{
                            user?<Link to='/add'>Add A Toy</Link>:<></>
                        }</li>
                        
                        <li><Link>Blogs</Link></li>
                    </ul>
                </div>
                <img className="w-36" src={logo} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold">
                    <li><Link to='/'>Home</Link></li>
                    <li>{
                            user?<Link>All Toys</Link>:<></>
                        }</li>
                        <li>{
                            user?<Link>My Toys</Link>:<></>
                        }</li>
                        <li>{
                            user?<Link to='/add'>Add A Toy</Link>:<></>
                        }</li>
                        
                    <li><Link>Blogs</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    !user ? <button className="btn btn-outline btn-error">
                        <Link to="/login">Login</Link>
                    </button> : <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={`${photo}`} title={!name ? email : name} />
                            </div>
                        </label>


                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li><a onClick={logOutHandler}>LogOut</a></li>
                        </ul>
                    </div>
                }

            </div>
        </div>
    );
};

export default Nav;