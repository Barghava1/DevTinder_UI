import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addreq, removereq } from '../utils/requestSlice'
import { BASE_URL } from '../utils/constants'

const Request = () => {
    const requests=useSelector((store)=>store.request)
    const dispatch=useDispatch()

    const reviewrequest=async(status,_id)=>{
        try {
        await axios.post(BASE_URL+"reviewrequest/"+status+"/"+_id,{},
            {withCredentials:true})

            dispatch(removereq(_id));
             } catch (error) {
            console.log(error.message)
        }
    }
   
    const fetchreq=async()=>{
        try {
            
       
        const res=await axios.get(BASE_URL+"user/request/recieved",
            {withCredentials:true})

            dispatch(addreq(res?.data?.data));

             } catch (error) {

                console.log(error.message)
            
        }
    }
    
    useEffect(()=>{
        fetchreq();

    },[])

 if(!requests) return;

    if(requests.length===0) return <h1 className='text-center my-5 font-bold'>No Connection Requests</h1>
  return (
    <div className='text-center my-10'>
     <h1 className='text-2xl font-bold'>Connection Requets</h1>
     
        {requests.map((connect)=>{
            const {_id}=connect
            const {firstName,lastName,age,gender,photoUrl}=connect.fromuserId
          return  (
            <div className='flex justify-between m-4 p-4 rounded-lg bg-base-300 w-1/2 mx-auto'>
                <div>
                    < img className="w-10 h-10 rounded-full" alt="photo" src={photoUrl}/>
                </div>
                <div className='text-left mx-10'>
                    <h1 className='text-xl '>{firstName+" "+lastName}</h1>
                    {age&&gender&&<p>{age+" , "+gender}</p>}
                </div>
                <div>
                    <button className="btn btn-primary mx-2" onClick={()=>reviewrequest("rejected",_id)}>Reject</button>
                    <button className="btn btn-secondary mx-2" onClick={()=>reviewrequest("accepted",_id)}>Accept</button>
                </div>
            </div>
        )
        })}
     
    </div>
  )
}

export default Request
