import React from 'react';

const UserToyCard = ({ UserToy,deleteHandler,updateHandler }) => {
    const {status, categories, description, email, name, picture, quantity, price, rating, sellerName, _id } = UserToy;
    return (

        <tr className=' bg-sky-200'>

            <td>
                <div className="flex items-center ">
                    <div className="avatar">
                        <div className="mask  w-72 ">
                            <img className='rounded-lg' src={picture} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div className='ml-4'>
                        <div className="font-bold text-3xl">Toy Name : {name}</div>
                        <div className="text-xl opacity-50">{categories}</div>
                        <div className='w-14 '>
                            <p className='w-full font-semibold'>{description.slice(0, 60)}</p>
                        </div>
                        <br />
                        <span className="badge font-bold text-xl p-4">Price: ${price}, Quantity: 
                          {quantity}</span>
                    </div>
                </div>
            </td>

            <td className=''>
                <h1>name: {sellerName}</h1>
                <h2>Email: {email}</h2>
            </td>
            
            <th>
                {   status === 'confirm'?<small className='text-green-600 font-bold'>Updated</small>:
                    <button onClick={()=>updateHandler(_id)} className="btn ">Update</button>}
            </th>
            <th>
                <button onClick={()=>deleteHandler(_id)} className="btn btn-error">Delete</button>
            </th>
            
        </tr>

    );
};

export default UserToyCard;