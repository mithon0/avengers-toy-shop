import React, { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

const AllToys = () => {

    const [toys,setToys]=useState([]);

    if(toys.length<20){
        toys.slice(0,20);
    }

    useEffect(()=>{
        fetch('https://avenger-toy-server.vercel.app/toys')
        .then(res=>res.json())
        .then(data=>setToys(data))
    },[])
console.log(toys);
    
    return (
        <div className='bg-blue-200'>
           <h1 className='text-center text-5xl mb-5'>All Toys</h1>
            <div className='grid grid-cols-4'>
            
                {
                  toys.map(t=>
                  
                  <div
                  key={t._id}
                  className="card w-72 glass mb-4">
  <figure><img src={t.picture} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">{t.name}</h2>
    <p>{t.description}</p>
    <h1>Price: ${t.price}</h1>
    <h1>Ratings: {t.rating}</h1>
    <div className="card-actions justify-end">
    
      <button className="btn btn-primary"><Link to={`/details/${t._id}`}>Details</Link></button>
    </div>
  </div>
</div>
            )  
                }
            </div>
            
        </div>
    );
};

export default AllToys;