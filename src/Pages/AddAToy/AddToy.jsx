import React, { useContext } from 'react';
import './AddToy.css'
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../../AuthProvider/AuthProvider';
const AddToy = () => {
    const {loggedUser}=useContext(AuthContext);
    const name = loggedUser?.displayName;
   
    const email = loggedUser?.email;
    console.log(name,email);

    const addToyHandler = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value
        const photo = form.photo.value;
        const sellerName = form.sellerName.value;
        const details = form.details.value;
        const email = form.email.value;
        const category = form.category.value;
        const price = form.price.value;
        const ratings = form.ratings.value;
        const quantity = form.quantity.value;
        const addToys = {
            name,
            picture: photo,
            sellerName,
            description: details,
            email,
            categories: category,
            price,
            rating: ratings,
            quantity

        }
        form.reset();
        toast.success('Toy added Successfully');
        console.log(addToys);
        fetch('https://avenger-toy-server-mithon0.vercel.app/toy', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(addToys)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    return (
        <div className='add h-[800px] top-0 p-10'>
            <form onSubmit={addToyHandler} className=' w-[800px] align-middle rounded-xl mx-auto bg-slate-200 '>
                <h1 className='font-bold text-3xl text-center pt-20 '>Add A Toy</h1>
                <div className='text-center m-5 pt-5'>
                    <input name='photo' className='border p-2 w-72 mr-3 ' type="text" placeholder='Picture URL' />
                    <input name='name' className='border p-2 w-72 ' type="text" placeholder='Toy Name' />
                </div>
                <div className='text-center m-5'>
                    <input name='sellerName' className='border p-2 w-72 mr-3 ' type="text" placeholder='seller name' defaultValue={name} />
                    <input name='quantity' className='border p-2 w-72 ' type="text" placeholder='Available quantity' />
                </div>
                <div className='text-center m-5'>
                    <input name='email' className='border p-2 w-72 mr-3 ' type="email" placeholder='seller email' defaultValue={email} />
                    <input name='category' className='border p-2 w-72 ' type="text" placeholder='Sub-category' />
                </div>
                <div className='text-center m-5'>
                    <input name='price' className='border p-2 w-72 mr-3 ' type="number" placeholder='Price' />
                    <input name='ratings' className='border p-2 w-72 ' type="text" placeholder='Rating' />
                </div>
                <div className=' m-5 mx-28 '>
                    
                    <input name='details'  className='border p-2 w-full textarea-lg ' type="text" placeholder='Detail description' />

                </div>
                <div className='pb-20 mx-auto text-center'>
                    <input className='btn w-[580px] ' type="submit" value="Add" />
                </div>
            </form>
            <Toaster/>
        </div>
    );
};

export default AddToy;