import NavBar from './NavBar'
import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { adduser } from '../utils/userSlice'
import { BASE_URL } from '../utils/constants'


const Body = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const fetchuser= async()=>{
    try{
    const res=await axios.get(BASE_URL+"profile/view",
      {withCredentials:true})
      dispatch(adduser(res.data));
    }
    catch(err)
    {
      if(err.status===401)
      {
        navigate("/login");
      }
      console.error(err);
    }
    

  }
  useEffect(()=>{
    fetchuser();

  },[])
  return (
    <div>
      <NavBar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Body
