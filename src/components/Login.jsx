import React, { useState } from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { adduser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';

const login = () => {
  const [email,setemail]=useState("barghava@gmail.in");
  const [password,setpassword]=useState("Barghava123@");
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const handleclick=async()=>{
     try{
     const res= await axios.post("http://localhost:8888/login",
     {
      email,password
    },{withCredentials:true});

  dispatch(adduser(res.data))
  navigate("/feed")
  
  }
  catch(err)
  {
    console.error(err);
  }
  }
  return (
    <div className='flex justify-center m-10'>
    <div className="card bg-base-100 w-96 shadow-xl">
  <div className="card-body">
    <h2 className="card-title justify-center">Login</h2>
    <div className='p-2 mx-2'>
    <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text ">Email-Id</span>
   
  </div>
  <input type="text" 
   value={email}
   className="input input-bordered w-full max-w-xs"
   onChange={(e)=>setemail(e.target.value)} />
  
    </label>
    </div>
    <div className='p-2 mx-2'>
    <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text ">Password</span>
   
  </div>
  <input type="text"
  value={password}
  onChange={(e)=>setpassword(e.target.value)}
   className="input input-bordered w-full max-w-xs" />
  
    </label>
    </div>
   
    <div className="card-actions justify-center">
      <button className="btn btn-primary"
      onClick={handleclick}>Login</button>
    </div>
  </div>
</div>
  </div>
  )
}

export default login
