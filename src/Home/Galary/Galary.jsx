import React, { useEffect, useState } from 'react';
import './Galary.css'

const Galary = () => {
const [galary,setGalary]=useState([]);
useEffect(()=>{
    fetch('https://avenger-toy-server.vercel.app/galary')
    .then(res=>res.json())
    .then(data=>setGalary(data))
},[])

    return (
        <div>
            <h1 className='text-center md:text-2xl font-semibold'>Gallery</h1>
            <hr className='m-10 border border-y-2' />
            <div className=' toy-galary'>
                <div className='ml-5 mt-2'>
                    <img src="https://images.unsplash.com/photo-1608278047522-58806a6ac85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="" />
                    <div>
                        <h1>BAtman</h1>
                        <p>Action figures were created by DC Comics and manufactured by various toy companies, these figures were made of various materials such as wood, tin, and plastic.</p>
                    </div>
                </div>
                <div className='md:ml-5 grid grid-cols-2'> 
                    {
                        galary.map(g=><div>
                            <div className="relative my-5 mx-auto rounded-lg w-96 glass">
  <figure className='h-52 w-96 rounded-lg'><img className='rounded-lg h-full w-full' src={g.image_url} alt="car!"/></figure>
  <div className=" absolute top-9 left-9 text-white w-40">
    <h2 className=" text-xl font-semibold">{g.name}</h2>
    <p>{g.description}</p>
    
  </div>
</div>
                        </div>)
                    }
                </div>
            </div>
            <hr className='m-10 border border-y-2'/>
        </div>
    );
};

export default Galary;