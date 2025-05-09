import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Usercard from './Usercard';
import axios from 'axios';
import { adduser } from '../utils/userSlice';


const Editprofile = () => {
    const user=useSelector(store=>store.user)
      const [firstName,setfirst]=useState(user.firstName);
      const [lastName,setlast]=useState(user.lastName);
      const [age,setage]=useState(user.age);
      const [gender,setgender]=useState(user.gender);
      const [photoUrl,setphoto]=useState(user.photoUrl);
      const dispatch=useDispatch();
      const [toast,settoast]=useState(false)

      const Saveprofile=async ()=>{
        const res=await axios.patch("http://localhost:8888/profile/edit",{
            firstName,
            lastName,
            age,
            gender,
            photoUrl

        },{withCredentials:true})
       dispatch(adduser(res?.data?.data))
       settoast(true)
       setTimeout(() => {
          settoast(false)
       }, 3000);
      }

  return (
    <>
    <div className='flex justify-center my-10'>
    <div className='flex justify-center mx-5'>
    <div className="card bg-base-200 w-96 shadow-xl">
  <div className="card-body">
    <h2 className="card-title justify-center">Login</h2>
    <div className='p-2 mx-2'>
    <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text ">FirstName</span>
   
  </div>
  <input type="text" 
   value={firstName}
   className="input input-bordered w-full max-w-xs"
   onChange={(e)=>setfirst(e.target.value)} />
  
    </label>
    </div>
    <div className='p-2 mx-2'>
    <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text ">LastName</span>
   
  </div>
  <input type="text"
  value={lastName}
  onChange={(e)=>setlast(e.target.value)}
   className="input input-bordered w-full max-w-xs" />
  
    </label>
    <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text ">age</span>
   
  </div>
  <input type="text" 
   value={age}
   className="input input-bordered w-full max-w-xs"
   onChange={(e)=>setage(e.target.value)} />
  
    </label>
    <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text ">Gender</span>
   
  </div>
  <input type="text" 
   value={gender}
   className="input input-bordered w-full max-w-xs"
   onChange={(e)=>setgender(e.target.value)} />
  
    </label>
    <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text ">PHOTO</span>
   
  </div>
  <input type="text" 
   value={photoUrl}
   className="input input-bordered w-full max-w-xs"
   onChange={(e)=>setphoto(e.target.value)} />
  
    </label>
    
    </div>
   
    <div className="card-actions justify-center">
      <button className="btn btn-primary" onClick={Saveprofile}>Save Profile</button>
    </div>
  </div>
</div>
  </div>
  <Usercard user={{firstName,lastName,age,gender,photoUrl}}/>
  </div>
  {toast&&<div className="toast toast-top toast-center">

  <div className="alert alert-success">
    <span>Profile saved successfully.</span>
  </div>
</div>}
  </>
  
  )
}

export default Editprofile
