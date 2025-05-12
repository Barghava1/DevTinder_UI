import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addFeed } from '../utils/feedSlice';
import Usercard from './Usercard';

const Feed = () => {
  const feed=useSelector((store)=>store.feed);
  const dispatch=useDispatch();

  

  

  const getFeed= async ()=>{
    try {
      if(feed) return;
      const res=await axios.get("http://localhost:8888/feed",
        {withCredentials:true});
       
        dispatch(addFeed(res?.data));
      
      
      
    } catch (error) {
      console.log(error);
      
    }
  }
  useEffect(()=>{
    getFeed();

  },[])
  
  if(!feed) return 

  if(feed.length===0) return <h1 className='text-center font-bold my-10'>No Users Found</h1>
  return (
   feed&&
    <div className='flex justify-center my-10'>
      <Usercard user={feed[0]}/>
     
    </div>
  )
}

export default Feed;
