import React, { useContext } from 'react';
import Rating from 'react-rating';
import { useLoaderData } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Details = ({id}) => {
const {name,description,price,rating,picture,categories}=useLoaderData();
const {user}=useContext(AuthContext);
console.log(name);
console.log(id);


    return (
        <div>
            <div className="card mx-auto border-none w-[700px] glass">
  <figure><img src={picture} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{description}</p>
    <p className='text-lg font-semibold'>Price: ${price}</p>
    <p>Ratings: {rating}</p>
    {/* <Rating name="half-rating-read" value={4}   readOnly /> */}
    <p>
        {
            user?.email?<small>saller email: {user.email}</small>:<></>
        }
        <br />
        {
            user?.displayName?<small>saller Name: {user.displayName}</small>:<></>
        }
    </p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Update</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Details;