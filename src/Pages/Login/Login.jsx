
import bg from "../../assets/images/login.jpg"
import { Link } from 'react-router-dom';
import { BsGoogle,BsGithub } from "react-icons/bs";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

const Login = () => {
    const {user,loginUser,googleSignIn,gitHubSignIn} =useContext(AuthContext)
    const googleProvider=new GoogleAuthProvider();
    const gitProvider=new GithubAuthProvider();

    const loginHandler=event=>{
        event.preventDefault()
        const form =event.target;
        const email =form.email.value;
        const password =form.password.value;
        // console.log(email,password);
        form.reset();
        loginUser(email,password)
        .then(result=>{
            const loggedUser=result.user;
            console.log(loggedUser);
            toast.success('Login Success')
        })
        .catch(err=>{
            toast.error(err.message)
        })

    }

    const googlehandler=()=>{
        googleSignIn(googleProvider)
        .then(result=>{
            console.log(result.user);
            toast.success('Sign in Success')
        })
        .catch(err=>{
            console.log(err.message);
            
        })
    }
    const gitHublehandler=()=>{
        gitHubSignIn(gitProvider)
        .then(result=>{
            console.log(result.user);
            toast.success('Sign in Success')
        })
        .catch(err=>{
            console.log(err.message);
            
        })
    }
    return (
        <div  className='text-center border m-11 relative'>
            <img src={bg} alt="" />
            <div className=' rounded-lg absolute md:ml-80 md:left-96 left-0 md:top-36 top-0 w-96 h-[500px] border   bg-slate-300'>
            <form onSubmit={loginHandler} >
                <h1 className='font-semibold text-3xl mt-10'>User Login</h1>
                <input name="email" className='border m-5 p-2 w-80 ' type="email" placeholder='Email'/><br />
                <input name="password" className='border mb-5 p-2 w-80' type="password" placeholder='Password'/><br />
                <input className='btn btn-primary w-80 ' type="submit" value="Login" />
                <p className='mt-5'>Create New Account <Link className='text-blue-600' to='/register'>Register</Link></p>
                <h3>Or</h3>
                
            </form>
            <button onClick={googlehandler} className='btn btn-outline btn-primary w-80 mb-5'><BsGoogle className='mx-2 text-xl'/>  Sign In With GooGle</button><br />
                <button onClick={gitHublehandler} className='btn btn-outline btn-primary w-80 mb-5'><BsGithub className='mx-2 text-xl'/>Sign In With Github</button>
            </div>
           
            <Toaster/>
        </div>
    );
};

export default Login;