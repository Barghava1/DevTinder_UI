import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addconnections } from '../utils/connectionSlice';

const Connections = () => {
    const dispatch=useDispatch();
    const connections=useSelector(store=>store.connections);
   
   

    const connect=async ()=>{


        const res=await axios.get("http://localhost:8888/user/connections",
            {withCredentials:true})

            dispatch(addconnections(res?.data?.data))

    }

    useEffect(()=>{
        connect()
    },[])

    if(!connections) return;

    if(connections.length===0) return <h1>No connections</h1>
  return (
    <div className='text-center my-10'>
     <h1 className='text-2xl font-bold'>Connections</h1>
     
        {connections.map((connect)=>{
            const {firstName,lastName,age,gender,photoUrl}=connect
          return  (
            <div className='flex m-4 p-4 rounded-lg bg-base-300 w-1/2 mx-auto'>
                <div>
                    < img className="w-10 h-10 rounded-full" alt="photo" src={photoUrl}/>
                </div>
                <div className='text-left mx-10'>
                    <h1 className='text-xl '>{firstName+" "+lastName}</h1>
                    {age&&gender&&<p>{age+" , "+gender}</p>}
                </div>
            </div>
        )
        })}
     
    </div>
  )
}

export default Connections
