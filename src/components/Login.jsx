import React, { useState } from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { adduser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';

const login = () => {
  const [email,setemail]=useState("");
  const [password,setpassword]=useState("");
  const [firstName,setfirst]=useState("");
  const [lastName,setlast]=useState("");
  const [isLogin,setislogin]=useState(true);
  const [error,seterror]=useState("");
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const handlelogin=async()=>{
     try{
     const res= await axios.post("http://localhost:8888/login",
     {
      email,password
    },{withCredentials:true});

  dispatch(adduser(res.data?.data))
  navigate("/feed")
  
  }
  catch(err)
  {
    seterror(err?.response?.data||"Something went wrong")
    console.error(err);
  }
  }

  const handlesignup=async()=>{
    try {
      const res=await axios.post("http://localhost:8888/signup",{
        firstName,
        lastName,
        email,
        password
      },{withCredentials:true})
      
  dispatch(adduser(res?.data?.data))
  console.log(res.data?.data)
  return navigate("/profile")
    } catch (error) {
       seterror(err?.response?.data||"Something went wrong")
    console.error(err);
      
    }
  }
  return (
    <div className='flex justify-center m-10'>
    <div className="card bg-base-100 w-96 shadow-xl">
  <div className="card-body">
    <h2 className="card-title justify-center">{isLogin?"Login":"Signup"}</h2>
   {!isLogin&&<> <div className='p-2 mx-2'>
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
   className="input input-bordered w-full max-w-xs"
   onChange={(e)=>setlast(e.target.value)} />
  
    </label>
    </div> </>}
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
   <p className='text-red-600'>{error}</p>
    <div className="card-actions justify-center">
      <button className="btn btn-primary"
      onClick={isLogin ? handlelogin: handlesignup}>{isLogin?"Login":"Signup"}</button>
    </div>
  </div>
     <p className='m-auto p-2 cursor-pointer' onClick={()=>setislogin((value)=>!value)}>
      {isLogin?"New User? signup":"Existing User? Login"}</p>
</div>
  </div>
  )
}

export default login
