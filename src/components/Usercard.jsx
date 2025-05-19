import axios from "axios";
import { useDispatch } from "react-redux";
import { removeFeed } from "../utils/feedSlice";
import { addconnections } from "../utils/connectionSlice";
import { BASE_URL } from "../utils/constants";


const Usercard = ({user}) => {
    const {_id,firstName,lastName,photoUrl,age,gender}=user;
       const dispatch=useDispatch()
    
    const handleusers=async(status,userid)=>{
    try {
      await axios.post(BASE_URL+"sendrequest/"+status+"/"+userid,{},
         {withCredentials:true})
         dispatch( removeFeed(_id))
      

       
    } catch (error) {
      console.log(error.message)
      
    }
      
    }

  return (
    <div className="card bg-base-300 w-96 shadow-sm">
  <figure>
    <img
      src={ photoUrl}
      alt={firstName} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstName+" "+lastName}</h2>
    <p>{gender}</p>
    <p>{age}</p>
    <div className="card-actions justify-center my-4">
    <button className="btn btn-primary" onClick={()=>handleusers("ignored",_id)}>Ignore</button>
      <button className="btn btn-secondary" onClick={()=>handleusers("intrested",_id)}>Intrest</button>
    </div>
  </div>
</div>
  )
}

export default Usercard
