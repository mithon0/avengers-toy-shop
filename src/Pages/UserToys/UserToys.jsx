import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import UserToyCard from './UserToyCard';

const UserToys = () => {
    const {loggedUser}=useContext(AuthContext);
    const email =loggedUser?.email;
    const [userToys,setUserToys]=useState([]);
    

    useEffect(()=>{
        fetch(`https://avenger-toy-server-mithon0.vercel.app/toy?email=${email}`)
        .then(res=>res.json())
        .then(data=>setUserToys(data))
    },[])
    console.log(userToys);

        const deleteHandler=(id)=>{
            console.log(id);

            const proceed=confirm('are you sure want to delete?');
    if(proceed){
        fetch(`https://avenger-toy-server-mithon0.vercel.app/toy/${id}`,{
                method:"DELETE"
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.deletedCount >0){
                    alert('deleted success');
                    const remaining= userToys.filter(toy=>toy._id !==id);
                    setUserToys(remaining)
                }

            })
    }

            
        }


        const updateHandler =(id)=>{
            fetch(`https://avenger-toy-server-mithon0.vercel.app/toy/${id}`,{
                method:"PATCH",
                headers:{
                    'content-type':'application/json',
                },
                body:JSON.stringify({status:'confirm'})
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.modifiedCount > 0){
                    alert('Updated success');
                    const remaining= userToys.filter(toy=>toy._id !==id);
                    const  update = userToys.find(toy=>toy._id ===id);
                    update.status ='confirm';
                    const newToys =[update,...remaining];
                    setUserToys(newToys);
                }
            })
        }

    return (
        <div className='bg-slate-100'>
            <h1 className='text-center text-5xl font-bold m-4'>My Toys</h1>
           <div className="overflow-x-auto w-full">
  <table className="table w-full ">
   
    
    <tbody className='bg-sky-200'>
      
    {
        userToys.map(t=><UserToyCard
        key={t._id}
        UserToy={t}
        deleteHandler={deleteHandler}
        updateHandler={updateHandler}
        ></UserToyCard>)
    }
     
    </tbody>
    
   
    
  </table>
</div>
        </div>
    );
};

export default UserToys;