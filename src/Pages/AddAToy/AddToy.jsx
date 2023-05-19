import React from 'react';

const AddToy = () => {
    return (
        <div>
            <form className=' w-[800px] align-middle mx-auto bg-slate-200'>
                <h1 className='font-bold text-3xl text-center pt-20 '>Add A Toy</h1>
                <div className='text-center m-5 pt-5'>
                    <input className='border p-2 w-72 mr-3 ' type="text" placeholder='Picture URL' />
                    <input className='border p-2 w-72 ' type="text" placeholder='Name' />
                </div>
                <div className='text-center m-5'>
                    <input className='border p-2 w-72 mr-3 ' type="text" placeholder='seller name' />
                    <input className='border p-2 w-72 ' type="text" placeholder='Detail description' />
                </div>
                <div className='text-center m-5'>
                    <input className='border p-2 w-72 mr-3 ' type="text" placeholder='seller email' />
                    <input className='border p-2 w-72 ' type="text" placeholder='Sub-category' />
                </div>
                <div className='text-center m-5'>
                    <input className='border p-2 w-72 mr-3 ' type="text" placeholder='Price' />
                    <input className='border p-2 w-72 ' type="text" placeholder='Rating' />
                </div>
                <div className=' m-5 ml-28 '>
                    <input className='border p-2 w-72 ' type="text" placeholder='Available quantity' />
                    
                </div>
                <div className='pb-20 mx-auto text-center'>
                <input className='btn w-[580px] ' type="submit" value="Add" />
                </div>
            </form>
        </div>
    );
};

export default AddToy;