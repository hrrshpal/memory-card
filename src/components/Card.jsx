import React, { useState } from 'react'
import '../styles/Card.css'

const Card = ({image, name, powerstats, clickedCards, setClickedCards,cardArray, setCardArray, score,bestScore, setScore, setBestScore}) => {

    function shuffleArray(cardArray){
        return [...cardArray].sort(()=> Math.random() - 0.5)
    }

    function handleClick(){
        let shuffled = shuffleArray(cardArray)
        setCardArray(shuffled)
        setScore(prev => prev + 1)
        setClickedCards([...clickedCards, name])

        if(clickedCards.includes(name)){
          setScore(0)
          setClickedCards([])
          if(score > bestScore){
            setBestScore(score)
          }
        }
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
