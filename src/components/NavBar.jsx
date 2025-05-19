import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { removeuser } from '../utils/userSlice'
import { BASE_URL } from '../utils/constants'

const NavBar = () => {
  const user=useSelector((store)=>store.user);
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const handlelogout=async ()=>{
    const res=await axios.post(BASE_URL+"logout",{},
      {withCredentials:true});
     dispatch(removeuser());
     navigate("/login");

  }
  

  return (
    <div>
         <div className="navbar bg-base-200">
  <div className="flex-1">
    <Link to="/feed" className="btn btn-ghost text-xl">DEVTINDER</Link>
  </div>
  {user&&<div className="flex-none gap-2">
    <p className='px-4'>Welcome, {user.firstName}</p>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="user_photo"
            src={user.photoUrl}/>
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <Link to="/profile" className="justify-between">
            Profile
            <span className="badge">New</span>
          </Link>
        </li>
        <li>
         <Link to="/connections">Connections</Link>
          </li>
          <li>
         <Link to="/requests">Requests</Link>
          </li>
        <li><a onClick={handlelogout} >Logout</a></li>
      </ul>
    </div>
  </div>}
</div>
      
  </div>
  )
}

export default NavBar
