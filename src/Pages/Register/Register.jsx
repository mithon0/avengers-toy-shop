import React from 'react';
import bg from "../../assets/images/login.jpg"
import { Link } from 'react-router-dom';
import { BsGoogle,BsGithub } from "react-icons/bs";

const Register = () => {



    const registerHeandlear=event=>{
        event.preventDefault()
        const form =event.target;
        const name=form.name.value;
        const email=form.email.value;
        const password =form.password.value;
        // console.log(name,email,password);
        form.reset();
        registerUser(email,password)
        .then(result=>{
            const loggedUser=result.user;
            console.log(loggedUser);
        })
        .catch(err=>{
            console.log(err.message);
        })
    }
    return (
        <div  className='text-center border m-11 relative'>
            <img src={bg} alt="" />
            <form onSubmit={registerHeandlear} className=' rounded-lg absolute md:ml-80 md:left-96 left-0 md:top-36 top-0 w-96 h-[600px] border   bg-slate-300'>
                <h1 className='font-semibold text-3xl mt-10'>Please register</h1>
                <input name='name' className='border p-2 mt-5 w-80 ' type="text" placeholder='Name'/><br />
                <input name='email' className='border m-5 p-2 w-80 ' type="email" placeholder='Email'/><br />
                <input name='password' className='border mb-5 p-2 w-80' type="password" placeholder='Password'/><br />
                <input className='btn btn-primary w-80 ' type="submit" value="Login" />
                <p className='mt-5'>Already have an Account? <Link className='text-blue-600' to='/login'>Please Login</Link></p>
                <h3>Or</h3>
                <button className='btn btn-outline btn-primary w-80 mb-5'><BsGoogle className='mx-2 text-xl'/>  Sign In With GooGle</button><br />
                <button className='btn btn-outline btn-primary w-80 mb-5'><BsGithub className='mx-2 text-xl'/>Sign In With Github</button>
            </form>
        </div>
    );
};

export default Register;