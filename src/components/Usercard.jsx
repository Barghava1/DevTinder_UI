import React from 'react'

const Usercard = ({user}) => {
    const {firstName,lastName,photoUrl,age,gender}=user;

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
    <button className="btn btn-primary">Ignored</button>
      <button className="btn btn-secondary">Intrested</button>
    </div>
  </div>
</div>
  )
}

export default Usercard
