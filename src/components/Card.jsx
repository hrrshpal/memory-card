import React from 'react'
import '../styles/Card.css'

const Card = ({image, name, powerstats}) => {

    function handleClick(){
        
    }

  return (
    <div onClick={handleClick} className="card">
      <img src={image} alt={name} />
      <p>{name}</p>
      <p>Power: {powerstats}</p>
    </div>
  )
}

export default Card
