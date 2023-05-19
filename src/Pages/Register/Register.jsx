import React, { useContext } from 'react';
import bg from "../../assets/images/login.jpg"
import { Link } from 'react-router-dom';
import { BsGoogle, BsGithub } from "react-icons/bs";
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const Register = () => {
    const googleProvider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();

    const { registerUser, updateUser, googleSignIn, gitHubSignIn } = useContext(AuthContext);

    const googlehandler = () => {
        googleSignIn(googleProvider)
            .then(result => {
                console.log(result.user);
                toast.success('Sign in Success')
            })
            .catch(err => {
                console.log(err.message);

            })
    }
    const gitHublehandler = () => {
        gitHubSignIn(gitProvider)
            .then(result => {
                console.log(result.user);
                toast.success('Sign in Success')
            })
            .catch(err => {
                console.log(err.message);

            })
    }

    const registerHeandlear = event => {

        event.preventDefault()

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        const userInfo = { displayName: name, photoURL: photo }
        console.log(userInfo);
        // console.log(name,email,password);
        form.reset();
        registerUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                toast.success('Registration success')
            })
            .catch(err => {
                console.log(err.message);
                toast.error(err.message)
            })
        updateUser(userInfo);


    }
    return (
        <div className='text-center border m-11 relative'>
            <img src={bg} alt="" />
            <form onSubmit={registerHeandlear} className=' rounded-lg absolute md:ml-80 md:left-96 left-0 md:top-36 top-0 w-96 h-[600px] border   bg-slate-300'>
                <h1 className='font-semibold text-3xl mt-10'>Please register</h1>
                <input name='name' className='border p-2 mt-5 w-80 ' type="text" placeholder='Name' /><br />
                <input name='photo' className='border p-2 mt-5 w-80 ' type="text" placeholder='PhotoUrl' /><br />
                <input name='email' className='border m-5 p-2 w-80 ' type="email" placeholder='Email' /><br />
                <input name='password' className='border mb-5 p-2 w-80' type="password" placeholder='Password' /><br />
                <input className='btn btn-primary w-80 ' type="submit" value="Login" />
                <p className='mt-5'>Already have an Account? <Link className='text-blue-600' to='/login'>Please Login</Link></p>
                <h3>Or</h3>
                <button onClick={googlehandler} className='btn btn-outline btn-primary w-80 mb-5'><BsGoogle className='mx-2 text-xl' />  Sign In With GooGle</button><br />
                <button onClick={gitHublehandler} className='btn btn-outline btn-primary w-80 mb-5'><BsGithub className='mx-2 text-xl' />Sign In With Github</button>
            </form>
            <Toaster
            />
        </div>
    );
};

export default Register;